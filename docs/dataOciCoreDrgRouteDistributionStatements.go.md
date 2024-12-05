# `dataOciCoreDrgRouteDistributionStatements` Submodule <a name="`dataOciCoreDrgRouteDistributionStatements` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreDrgRouteDistributionStatements <a name="DataOciCoreDrgRouteDistributionStatements" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_distribution_statements oci_core_drg_route_distribution_statements}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoredrgroutedistributionstatements"

dataocicoredrgroutedistributionstatements.NewDataOciCoreDrgRouteDistributionStatements(scope Construct, id *string, config DataOciCoreDrgRouteDistributionStatementsConfig) DataOciCoreDrgRouteDistributionStatements
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig">DataOciCoreDrgRouteDistributionStatementsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig">DataOciCoreDrgRouteDistributionStatementsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreDrgRouteDistributionStatements resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoredrgroutedistributionstatements"

dataocicoredrgroutedistributionstatements.DataOciCoreDrgRouteDistributionStatements_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoredrgroutedistributionstatements"

dataocicoredrgroutedistributionstatements.DataOciCoreDrgRouteDistributionStatements_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoredrgroutedistributionstatements"

dataocicoredrgroutedistributionstatements.DataOciCoreDrgRouteDistributionStatements_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoredrgroutedistributionstatements"

dataocicoredrgroutedistributionstatements.DataOciCoreDrgRouteDistributionStatements_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciCoreDrgRouteDistributionStatements resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciCoreDrgRouteDistributionStatements to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciCoreDrgRouteDistributionStatements that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_distribution_statements#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreDrgRouteDistributionStatements to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.drgRouteDistributionStatements">DrgRouteDistributionStatements</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList">DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList">DataOciCoreDrgRouteDistributionStatementsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.drgRouteDistributionIdInput">DrgRouteDistributionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.drgRouteDistributionId">DrgRouteDistributionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `DrgRouteDistributionStatements`<sup>Required</sup> <a name="DrgRouteDistributionStatements" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.drgRouteDistributionStatements"></a>

```go
func DrgRouteDistributionStatements() DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList">DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.filter"></a>

```go
func Filter() DataOciCoreDrgRouteDistributionStatementsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList">DataOciCoreDrgRouteDistributionStatementsFilterList</a>

---

##### `DrgRouteDistributionIdInput`<sup>Optional</sup> <a name="DrgRouteDistributionIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.drgRouteDistributionIdInput"></a>

```go
func DrgRouteDistributionIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `DrgRouteDistributionId`<sup>Required</sup> <a name="DrgRouteDistributionId" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.drgRouteDistributionId"></a>

```go
func DrgRouteDistributionId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreDrgRouteDistributionStatementsConfig <a name="DataOciCoreDrgRouteDistributionStatementsConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoredrgroutedistributionstatements"

&dataocicoredrgroutedistributionstatements.DataOciCoreDrgRouteDistributionStatementsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DrgRouteDistributionId: *string,
	Filter: interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.drgRouteDistributionId">DrgRouteDistributionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_distribution_statements#drg_route_distribution_id DataOciCoreDrgRouteDistributionStatements#drg_route_distribution_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_distribution_statements#id DataOciCoreDrgRouteDistributionStatements#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DrgRouteDistributionId`<sup>Required</sup> <a name="DrgRouteDistributionId" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.drgRouteDistributionId"></a>

```go
DrgRouteDistributionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_distribution_statements#drg_route_distribution_id DataOciCoreDrgRouteDistributionStatements#drg_route_distribution_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_distribution_statements#filter DataOciCoreDrgRouteDistributionStatements#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_distribution_statements#id DataOciCoreDrgRouteDistributionStatements#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatements <a name="DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatements" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatements"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatements.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoredrgroutedistributionstatements"

&dataocicoredrgroutedistributionstatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatements {

}
```


### DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteria <a name="DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteria" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteria"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteria.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoredrgroutedistributionstatements"

&dataocicoredrgroutedistributionstatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteria {

}
```


### DataOciCoreDrgRouteDistributionStatementsFilter <a name="DataOciCoreDrgRouteDistributionStatementsFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoredrgroutedistributionstatements"

&dataocicoredrgroutedistributionstatements.DataOciCoreDrgRouteDistributionStatementsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_distribution_statements#name DataOciCoreDrgRouteDistributionStatements#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_distribution_statements#values DataOciCoreDrgRouteDistributionStatements#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_distribution_statements#regex DataOciCoreDrgRouteDistributionStatements#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_distribution_statements#name DataOciCoreDrgRouteDistributionStatements#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_distribution_statements#values DataOciCoreDrgRouteDistributionStatements#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_distribution_statements#regex DataOciCoreDrgRouteDistributionStatements#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList <a name="DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoredrgroutedistributionstatements"

dataocicoredrgroutedistributionstatements.NewDataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.get"></a>

```go
func Get(index *f64) DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList <a name="DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoredrgroutedistributionstatements"

dataocicoredrgroutedistributionstatements.NewDataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.get"></a>

```go
func Get(index *f64) DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference <a name="DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoredrgroutedistributionstatements"

dataocicoredrgroutedistributionstatements.NewDataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.property.attachmentType">AttachmentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.property.drgAttachmentId">DrgAttachmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.property.matchType">MatchType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteria">DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttachmentType`<sup>Required</sup> <a name="AttachmentType" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.property.attachmentType"></a>

```go
func AttachmentType() *string
```

- *Type:* *string

---

##### `DrgAttachmentId`<sup>Required</sup> <a name="DrgAttachmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.property.drgAttachmentId"></a>

```go
func DrgAttachmentId() *string
```

- *Type:* *string

---

##### `MatchType`<sup>Required</sup> <a name="MatchType" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.property.matchType"></a>

```go
func MatchType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteria
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteria">DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteria</a>

---


### DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference <a name="DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoredrgroutedistributionstatements"

dataocicoredrgroutedistributionstatements.NewDataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.property.matchCriteria">MatchCriteria</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList">DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatements">DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatements</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MatchCriteria`<sup>Required</sup> <a name="MatchCriteria" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.property.matchCriteria"></a>

```go
func MatchCriteria() DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList">DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList</a>

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatements
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatements">DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatements</a>

---


### DataOciCoreDrgRouteDistributionStatementsFilterList <a name="DataOciCoreDrgRouteDistributionStatementsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoredrgroutedistributionstatements"

dataocicoredrgroutedistributionstatements.NewDataOciCoreDrgRouteDistributionStatementsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreDrgRouteDistributionStatementsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.get"></a>

```go
func Get(index *f64) DataOciCoreDrgRouteDistributionStatementsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciCoreDrgRouteDistributionStatementsFilterOutputReference <a name="DataOciCoreDrgRouteDistributionStatementsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoredrgroutedistributionstatements"

dataocicoredrgroutedistributionstatements.NewDataOciCoreDrgRouteDistributionStatementsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreDrgRouteDistributionStatementsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



