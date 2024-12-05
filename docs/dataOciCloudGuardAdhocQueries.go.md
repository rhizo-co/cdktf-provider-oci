# `dataOciCloudGuardAdhocQueries` Submodule <a name="`dataOciCloudGuardAdhocQueries` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCloudGuardAdhocQueries <a name="DataOciCloudGuardAdhocQueries" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries oci_cloud_guard_adhoc_queries}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardadhocqueries"

dataocicloudguardadhocqueries.NewDataOciCloudGuardAdhocQueries(scope Construct, id *string, config DataOciCloudGuardAdhocQueriesConfig) DataOciCloudGuardAdhocQueries
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig">DataOciCloudGuardAdhocQueriesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig">DataOciCloudGuardAdhocQueriesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.resetAccessLevel">ResetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.resetAdhocQueryStatus">ResetAdhocQueryStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.resetCompartmentIdInSubtree">ResetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.resetTimeEndedFilterQueryParam">ResetTimeEndedFilterQueryParam</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.resetTimeStartedFilterQueryParam">ResetTimeStartedFilterQueryParam</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccessLevel` <a name="ResetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.resetAccessLevel"></a>

```go
func ResetAccessLevel()
```

##### `ResetAdhocQueryStatus` <a name="ResetAdhocQueryStatus" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.resetAdhocQueryStatus"></a>

```go
func ResetAdhocQueryStatus()
```

##### `ResetCompartmentIdInSubtree` <a name="ResetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.resetCompartmentIdInSubtree"></a>

```go
func ResetCompartmentIdInSubtree()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeEndedFilterQueryParam` <a name="ResetTimeEndedFilterQueryParam" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.resetTimeEndedFilterQueryParam"></a>

```go
func ResetTimeEndedFilterQueryParam()
```

##### `ResetTimeStartedFilterQueryParam` <a name="ResetTimeStartedFilterQueryParam" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.resetTimeStartedFilterQueryParam"></a>

```go
func ResetTimeStartedFilterQueryParam()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCloudGuardAdhocQueries resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardadhocqueries"

dataocicloudguardadhocqueries.DataOciCloudGuardAdhocQueries_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardadhocqueries"

dataocicloudguardadhocqueries.DataOciCloudGuardAdhocQueries_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardadhocqueries"

dataocicloudguardadhocqueries.DataOciCloudGuardAdhocQueries_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardadhocqueries"

dataocicloudguardadhocqueries.DataOciCloudGuardAdhocQueries_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciCloudGuardAdhocQueries resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciCloudGuardAdhocQueries to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciCloudGuardAdhocQueries that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCloudGuardAdhocQueries to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.adhocQueryCollection">AdhocQueryCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList">DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList">DataOciCloudGuardAdhocQueriesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.accessLevelInput">AccessLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.adhocQueryStatusInput">AdhocQueryStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.compartmentIdInSubtreeInput">CompartmentIdInSubtreeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.timeEndedFilterQueryParamInput">TimeEndedFilterQueryParamInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.timeStartedFilterQueryParamInput">TimeStartedFilterQueryParamInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.adhocQueryStatus">AdhocQueryStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.timeEndedFilterQueryParam">TimeEndedFilterQueryParam</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.timeStartedFilterQueryParam">TimeStartedFilterQueryParam</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AdhocQueryCollection`<sup>Required</sup> <a name="AdhocQueryCollection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.adhocQueryCollection"></a>

```go
func AdhocQueryCollection() DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList">DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.filter"></a>

```go
func Filter() DataOciCloudGuardAdhocQueriesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList">DataOciCloudGuardAdhocQueriesFilterList</a>

---

##### `AccessLevelInput`<sup>Optional</sup> <a name="AccessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.accessLevelInput"></a>

```go
func AccessLevelInput() *string
```

- *Type:* *string

---

##### `AdhocQueryStatusInput`<sup>Optional</sup> <a name="AdhocQueryStatusInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.adhocQueryStatusInput"></a>

```go
func AdhocQueryStatusInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="CompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.compartmentIdInSubtreeInput"></a>

```go
func CompartmentIdInSubtreeInput() interface{}
```

- *Type:* interface{}

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TimeEndedFilterQueryParamInput`<sup>Optional</sup> <a name="TimeEndedFilterQueryParamInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.timeEndedFilterQueryParamInput"></a>

```go
func TimeEndedFilterQueryParamInput() *string
```

- *Type:* *string

---

##### `TimeStartedFilterQueryParamInput`<sup>Optional</sup> <a name="TimeStartedFilterQueryParamInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.timeStartedFilterQueryParamInput"></a>

```go
func TimeStartedFilterQueryParamInput() *string
```

- *Type:* *string

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.accessLevel"></a>

```go
func AccessLevel() *string
```

- *Type:* *string

---

##### `AdhocQueryStatus`<sup>Required</sup> <a name="AdhocQueryStatus" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.adhocQueryStatus"></a>

```go
func AdhocQueryStatus() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `CompartmentIdInSubtree`<sup>Required</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.compartmentIdInSubtree"></a>

```go
func CompartmentIdInSubtree() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `TimeEndedFilterQueryParam`<sup>Required</sup> <a name="TimeEndedFilterQueryParam" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.timeEndedFilterQueryParam"></a>

```go
func TimeEndedFilterQueryParam() *string
```

- *Type:* *string

---

##### `TimeStartedFilterQueryParam`<sup>Required</sup> <a name="TimeStartedFilterQueryParam" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.timeStartedFilterQueryParam"></a>

```go
func TimeStartedFilterQueryParam() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCloudGuardAdhocQueriesAdhocQueryCollection <a name="DataOciCloudGuardAdhocQueriesAdhocQueryCollection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardadhocqueries"

&dataocicloudguardadhocqueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollection {

}
```


### DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItems <a name="DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardadhocqueries"

&dataocicloudguardadhocqueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItems {

}
```


### DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetails <a name="DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardadhocqueries"

&dataocicloudguardadhocqueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetails {

}
```


### DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResources <a name="DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResources" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResources.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardadhocqueries"

&dataocicloudguardadhocqueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResources {

}
```


### DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetails <a name="DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardadhocqueries"

&dataocicloudguardadhocqueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetails {

}
```


### DataOciCloudGuardAdhocQueriesConfig <a name="DataOciCloudGuardAdhocQueriesConfig" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardadhocqueries"

&dataocicloudguardadhocqueries.DataOciCloudGuardAdhocQueriesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	AccessLevel: *string,
	AdhocQueryStatus: *string,
	CompartmentIdInSubtree: interface{},
	Filter: interface{},
	Id: *string,
	TimeEndedFilterQueryParam: *string,
	TimeStartedFilterQueryParam: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#compartment_id DataOciCloudGuardAdhocQueries#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#access_level DataOciCloudGuardAdhocQueries#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.adhocQueryStatus">AdhocQueryStatus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#adhoc_query_status DataOciCloudGuardAdhocQueries#adhoc_query_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#compartment_id_in_subtree DataOciCloudGuardAdhocQueries#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#id DataOciCloudGuardAdhocQueries#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.timeEndedFilterQueryParam">TimeEndedFilterQueryParam</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#time_ended_filter_query_param DataOciCloudGuardAdhocQueries#time_ended_filter_query_param}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.timeStartedFilterQueryParam">TimeStartedFilterQueryParam</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#time_started_filter_query_param DataOciCloudGuardAdhocQueries#time_started_filter_query_param}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#compartment_id DataOciCloudGuardAdhocQueries#compartment_id}.

---

##### `AccessLevel`<sup>Optional</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.accessLevel"></a>

```go
AccessLevel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#access_level DataOciCloudGuardAdhocQueries#access_level}.

---

##### `AdhocQueryStatus`<sup>Optional</sup> <a name="AdhocQueryStatus" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.adhocQueryStatus"></a>

```go
AdhocQueryStatus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#adhoc_query_status DataOciCloudGuardAdhocQueries#adhoc_query_status}.

---

##### `CompartmentIdInSubtree`<sup>Optional</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.compartmentIdInSubtree"></a>

```go
CompartmentIdInSubtree interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#compartment_id_in_subtree DataOciCloudGuardAdhocQueries#compartment_id_in_subtree}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#filter DataOciCloudGuardAdhocQueries#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#id DataOciCloudGuardAdhocQueries#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `TimeEndedFilterQueryParam`<sup>Optional</sup> <a name="TimeEndedFilterQueryParam" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.timeEndedFilterQueryParam"></a>

```go
TimeEndedFilterQueryParam *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#time_ended_filter_query_param DataOciCloudGuardAdhocQueries#time_ended_filter_query_param}.

---

##### `TimeStartedFilterQueryParam`<sup>Optional</sup> <a name="TimeStartedFilterQueryParam" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.timeStartedFilterQueryParam"></a>

```go
TimeStartedFilterQueryParam *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#time_started_filter_query_param DataOciCloudGuardAdhocQueries#time_started_filter_query_param}.

---

### DataOciCloudGuardAdhocQueriesFilter <a name="DataOciCloudGuardAdhocQueriesFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardadhocqueries"

&dataocicloudguardadhocqueries.DataOciCloudGuardAdhocQueriesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#name DataOciCloudGuardAdhocQueries#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#values DataOciCloudGuardAdhocQueries#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#regex DataOciCloudGuardAdhocQueries#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#name DataOciCloudGuardAdhocQueries#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#values DataOciCloudGuardAdhocQueries#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#regex DataOciCloudGuardAdhocQueries#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList <a name="DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardadhocqueries"

dataocicloudguardadhocqueries.NewDataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.get"></a>

```go
func Get(index *f64) DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference <a name="DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardadhocqueries"

dataocicloudguardadhocqueries.NewDataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.resourceIds">ResourceIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResources">DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `ResourceIds`<sup>Required</sup> <a name="ResourceIds" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.resourceIds"></a>

```go
func ResourceIds() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResources
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResources">DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResources</a>

---


### DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList <a name="DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardadhocqueries"

dataocicloudguardadhocqueries.NewDataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.get"></a>

```go
func Get(index *f64) DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference <a name="DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardadhocqueries"

dataocicloudguardadhocqueries.NewDataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.property.adhocQueryResources">AdhocQueryResources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList">DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetails">DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdhocQueryResources`<sup>Required</sup> <a name="AdhocQueryResources" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.property.adhocQueryResources"></a>

```go
func AdhocQueryResources() DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList">DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList</a>

---

##### `Query`<sup>Required</sup> <a name="Query" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetails">DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetails</a>

---


### DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList <a name="DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardadhocqueries"

dataocicloudguardadhocqueries.NewDataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.get"></a>

```go
func Get(index *f64) DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference <a name="DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardadhocqueries"

dataocicloudguardadhocqueries.NewDataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.expectedCount">ExpectedCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.expiredCount">ExpiredCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.failedCount">FailedCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.regionalError">RegionalError</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.regionalStatus">RegionalStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.succeededCount">SucceededCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetails">DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpectedCount`<sup>Required</sup> <a name="ExpectedCount" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.expectedCount"></a>

```go
func ExpectedCount() *string
```

- *Type:* *string

---

##### `ExpiredCount`<sup>Required</sup> <a name="ExpiredCount" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.expiredCount"></a>

```go
func ExpiredCount() *string
```

- *Type:* *string

---

##### `FailedCount`<sup>Required</sup> <a name="FailedCount" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.failedCount"></a>

```go
func FailedCount() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `RegionalError`<sup>Required</sup> <a name="RegionalError" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.regionalError"></a>

```go
func RegionalError() *string
```

- *Type:* *string

---

##### `RegionalStatus`<sup>Required</sup> <a name="RegionalStatus" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.regionalStatus"></a>

```go
func RegionalStatus() *string
```

- *Type:* *string

---

##### `SucceededCount`<sup>Required</sup> <a name="SucceededCount" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.succeededCount"></a>

```go
func SucceededCount() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetails">DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetails</a>

---


### DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList <a name="DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardadhocqueries"

dataocicloudguardadhocqueries.NewDataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference <a name="DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardadhocqueries"

dataocicloudguardadhocqueries.NewDataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.adhocQueryDetails">AdhocQueryDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList">DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.adhocQueryRegionalDetails">AdhocQueryRegionalDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList">DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.errorMessage">ErrorMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItems">DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdhocQueryDetails`<sup>Required</sup> <a name="AdhocQueryDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.adhocQueryDetails"></a>

```go
func AdhocQueryDetails() DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList">DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList</a>

---

##### `AdhocQueryRegionalDetails`<sup>Required</sup> <a name="AdhocQueryRegionalDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.adhocQueryRegionalDetails"></a>

```go
func AdhocQueryRegionalDetails() DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList">DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList</a>

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.errorMessage"></a>

```go
func ErrorMessage() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItems">DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItems</a>

---


### DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList <a name="DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardadhocqueries"

dataocicloudguardadhocqueries.NewDataOciCloudGuardAdhocQueriesAdhocQueryCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.get"></a>

```go
func Get(index *f64) DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference <a name="DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardadhocqueries"

dataocicloudguardadhocqueries.NewDataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList">DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollection">DataOciCloudGuardAdhocQueriesAdhocQueryCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.property.items"></a>

```go
func Items() DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList">DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudGuardAdhocQueriesAdhocQueryCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollection">DataOciCloudGuardAdhocQueriesAdhocQueryCollection</a>

---


### DataOciCloudGuardAdhocQueriesFilterList <a name="DataOciCloudGuardAdhocQueriesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardadhocqueries"

dataocicloudguardadhocqueries.NewDataOciCloudGuardAdhocQueriesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudGuardAdhocQueriesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.get"></a>

```go
func Get(index *f64) DataOciCloudGuardAdhocQueriesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciCloudGuardAdhocQueriesFilterOutputReference <a name="DataOciCloudGuardAdhocQueriesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardadhocqueries"

dataocicloudguardadhocqueries.NewDataOciCloudGuardAdhocQueriesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudGuardAdhocQueriesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



