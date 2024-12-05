# `dataOciDataSafeAuditProfileAnalytic` Submodule <a name="`dataOciDataSafeAuditProfileAnalytic` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeAuditProfileAnalytic <a name="DataOciDataSafeAuditProfileAnalytic" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_analytic oci_data_safe_audit_profile_analytic}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeauditprofileanalytic"

dataocidatasafeauditprofileanalytic.NewDataOciDataSafeAuditProfileAnalytic(scope Construct, id *string, config DataOciDataSafeAuditProfileAnalyticConfig) DataOciDataSafeAuditProfileAnalytic
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticConfig">DataOciDataSafeAuditProfileAnalyticConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticConfig">DataOciDataSafeAuditProfileAnalyticConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.resetAccessLevel">ResetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.resetCompartmentIdInSubtree">ResetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.resetGroupBy">ResetGroupBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAccessLevel` <a name="ResetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.resetAccessLevel"></a>

```go
func ResetAccessLevel()
```

##### `ResetCompartmentIdInSubtree` <a name="ResetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.resetCompartmentIdInSubtree"></a>

```go
func ResetCompartmentIdInSubtree()
```

##### `ResetGroupBy` <a name="ResetGroupBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.resetGroupBy"></a>

```go
func ResetGroupBy()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeAuditProfileAnalytic resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeauditprofileanalytic"

dataocidatasafeauditprofileanalytic.DataOciDataSafeAuditProfileAnalytic_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeauditprofileanalytic"

dataocidatasafeauditprofileanalytic.DataOciDataSafeAuditProfileAnalytic_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeauditprofileanalytic"

dataocidatasafeauditprofileanalytic.DataOciDataSafeAuditProfileAnalytic_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeauditprofileanalytic"

dataocidatasafeauditprofileanalytic.DataOciDataSafeAuditProfileAnalytic_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDataSafeAuditProfileAnalytic resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDataSafeAuditProfileAnalytic to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDataSafeAuditProfileAnalytic that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_analytic#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeAuditProfileAnalytic to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsList">DataOciDataSafeAuditProfileAnalyticItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.property.accessLevelInput">AccessLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.property.compartmentIdInSubtreeInput">CompartmentIdInSubtreeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.property.groupByInput">GroupByInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.property.groupBy">GroupBy</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.property.items"></a>

```go
func Items() DataOciDataSafeAuditProfileAnalyticItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsList">DataOciDataSafeAuditProfileAnalyticItemsList</a>

---

##### `AccessLevelInput`<sup>Optional</sup> <a name="AccessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.property.accessLevelInput"></a>

```go
func AccessLevelInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="CompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.property.compartmentIdInSubtreeInput"></a>

```go
func CompartmentIdInSubtreeInput() interface{}
```

- *Type:* interface{}

---

##### `GroupByInput`<sup>Optional</sup> <a name="GroupByInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.property.groupByInput"></a>

```go
func GroupByInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.property.accessLevel"></a>

```go
func AccessLevel() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `CompartmentIdInSubtree`<sup>Required</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.property.compartmentIdInSubtree"></a>

```go
func CompartmentIdInSubtree() interface{}
```

- *Type:* interface{}

---

##### `GroupBy`<sup>Required</sup> <a name="GroupBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.property.groupBy"></a>

```go
func GroupBy() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalytic.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeAuditProfileAnalyticConfig <a name="DataOciDataSafeAuditProfileAnalyticConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeauditprofileanalytic"

&dataocidatasafeauditprofileanalytic.DataOciDataSafeAuditProfileAnalyticConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	AccessLevel: *string,
	CompartmentIdInSubtree: interface{},
	GroupBy: *[]*string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_analytic#compartment_id DataOciDataSafeAuditProfileAnalytic#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticConfig.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_analytic#access_level DataOciDataSafeAuditProfileAnalytic#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticConfig.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_analytic#compartment_id_in_subtree DataOciDataSafeAuditProfileAnalytic#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticConfig.property.groupBy">GroupBy</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_analytic#group_by DataOciDataSafeAuditProfileAnalytic#group_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_analytic#id DataOciDataSafeAuditProfileAnalytic#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_analytic#compartment_id DataOciDataSafeAuditProfileAnalytic#compartment_id}.

---

##### `AccessLevel`<sup>Optional</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticConfig.property.accessLevel"></a>

```go
AccessLevel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_analytic#access_level DataOciDataSafeAuditProfileAnalytic#access_level}.

---

##### `CompartmentIdInSubtree`<sup>Optional</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticConfig.property.compartmentIdInSubtree"></a>

```go
CompartmentIdInSubtree interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_analytic#compartment_id_in_subtree DataOciDataSafeAuditProfileAnalytic#compartment_id_in_subtree}.

---

##### `GroupBy`<sup>Optional</sup> <a name="GroupBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticConfig.property.groupBy"></a>

```go
GroupBy *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_analytic#group_by DataOciDataSafeAuditProfileAnalytic#group_by}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_analytic#id DataOciDataSafeAuditProfileAnalytic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDataSafeAuditProfileAnalyticItems <a name="DataOciDataSafeAuditProfileAnalyticItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeauditprofileanalytic"

&dataocidatasafeauditprofileanalytic.DataOciDataSafeAuditProfileAnalyticItems {

}
```


### DataOciDataSafeAuditProfileAnalyticItemsDimensions <a name="DataOciDataSafeAuditProfileAnalyticItemsDimensions" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeauditprofileanalytic"

&dataocidatasafeauditprofileanalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensions {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeAuditProfileAnalyticItemsDimensionsList <a name="DataOciDataSafeAuditProfileAnalyticItemsDimensionsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeauditprofileanalytic"

dataocidatasafeauditprofileanalytic.NewDataOciDataSafeAuditProfileAnalyticItemsDimensionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeAuditProfileAnalyticItemsDimensionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsList.get"></a>

```go
func Get(index *f64) DataOciDataSafeAuditProfileAnalyticItemsDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeAuditProfileAnalyticItemsDimensionsOutputReference <a name="DataOciDataSafeAuditProfileAnalyticItemsDimensionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeauditprofileanalytic"

dataocidatasafeauditprofileanalytic.NewDataOciDataSafeAuditProfileAnalyticItemsDimensionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeAuditProfileAnalyticItemsDimensionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsOutputReference.property.isPaidUsageEnabled">IsPaidUsageEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensions">DataOciDataSafeAuditProfileAnalyticItemsDimensions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsPaidUsageEnabled`<sup>Required</sup> <a name="IsPaidUsageEnabled" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsOutputReference.property.isPaidUsageEnabled"></a>

```go
func IsPaidUsageEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeAuditProfileAnalyticItemsDimensions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensions">DataOciDataSafeAuditProfileAnalyticItemsDimensions</a>

---


### DataOciDataSafeAuditProfileAnalyticItemsList <a name="DataOciDataSafeAuditProfileAnalyticItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeauditprofileanalytic"

dataocidatasafeauditprofileanalytic.NewDataOciDataSafeAuditProfileAnalyticItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeAuditProfileAnalyticItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsList.get"></a>

```go
func Get(index *f64) DataOciDataSafeAuditProfileAnalyticItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeAuditProfileAnalyticItemsOutputReference <a name="DataOciDataSafeAuditProfileAnalyticItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeauditprofileanalytic"

dataocidatasafeauditprofileanalytic.NewDataOciDataSafeAuditProfileAnalyticItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeAuditProfileAnalyticItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsOutputReference.property.count">Count</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsOutputReference.property.dimensions">Dimensions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsList">DataOciDataSafeAuditProfileAnalyticItemsDimensionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItems">DataOciDataSafeAuditProfileAnalyticItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Count`<sup>Required</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsOutputReference.property.count"></a>

```go
func Count() *string
```

- *Type:* *string

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsOutputReference.property.dimensions"></a>

```go
func Dimensions() DataOciDataSafeAuditProfileAnalyticItemsDimensionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsDimensionsList">DataOciDataSafeAuditProfileAnalyticItemsDimensionsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeAuditProfileAnalyticItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAnalytic.DataOciDataSafeAuditProfileAnalyticItems">DataOciDataSafeAuditProfileAnalyticItems</a>

---



