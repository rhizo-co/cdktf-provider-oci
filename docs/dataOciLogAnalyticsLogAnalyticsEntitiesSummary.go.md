# `dataOciLogAnalyticsLogAnalyticsEntitiesSummary` Submodule <a name="`dataOciLogAnalyticsLogAnalyticsEntitiesSummary` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLogAnalyticsLogAnalyticsEntitiesSummary <a name="DataOciLogAnalyticsLogAnalyticsEntitiesSummary" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities_summary oci_log_analytics_log_analytics_entities_summary}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsloganalyticsentitiessummary"

dataociloganalyticsloganalyticsentitiessummary.NewDataOciLogAnalyticsLogAnalyticsEntitiesSummary(scope Construct, id *string, config DataOciLogAnalyticsLogAnalyticsEntitiesSummaryConfig) DataOciLogAnalyticsLogAnalyticsEntitiesSummary
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummaryConfig">DataOciLogAnalyticsLogAnalyticsEntitiesSummaryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummaryConfig">DataOciLogAnalyticsLogAnalyticsEntitiesSummaryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciLogAnalyticsLogAnalyticsEntitiesSummary resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsloganalyticsentitiessummary"

dataociloganalyticsloganalyticsentitiessummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsloganalyticsentitiessummary"

dataociloganalyticsloganalyticsentitiessummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsloganalyticsentitiessummary"

dataociloganalyticsloganalyticsentitiessummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsloganalyticsentitiessummary"

dataociloganalyticsloganalyticsentitiessummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciLogAnalyticsLogAnalyticsEntitiesSummary resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciLogAnalyticsLogAnalyticsEntitiesSummary to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciLogAnalyticsLogAnalyticsEntitiesSummary that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities_summary#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLogAnalyticsLogAnalyticsEntitiesSummary to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.activeEntitiesCount">ActiveEntitiesCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.entitiesWithHasLogsCollectedCount">EntitiesWithHasLogsCollectedCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.entitiesWithManagementAgentCount">EntitiesWithManagementAgentCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ActiveEntitiesCount`<sup>Required</sup> <a name="ActiveEntitiesCount" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.activeEntitiesCount"></a>

```go
func ActiveEntitiesCount() *f64
```

- *Type:* *f64

---

##### `EntitiesWithHasLogsCollectedCount`<sup>Required</sup> <a name="EntitiesWithHasLogsCollectedCount" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.entitiesWithHasLogsCollectedCount"></a>

```go
func EntitiesWithHasLogsCollectedCount() *f64
```

- *Type:* *f64

---

##### `EntitiesWithManagementAgentCount`<sup>Required</sup> <a name="EntitiesWithManagementAgentCount" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.entitiesWithManagementAgentCount"></a>

```go
func EntitiesWithManagementAgentCount() *f64
```

- *Type:* *f64

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLogAnalyticsLogAnalyticsEntitiesSummaryConfig <a name="DataOciLogAnalyticsLogAnalyticsEntitiesSummaryConfig" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummaryConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummaryConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsloganalyticsentitiessummary"

&dataociloganalyticsloganalyticsentitiessummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummaryConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	Namespace: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummaryConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummaryConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummaryConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummaryConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummaryConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummaryConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummaryConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummaryConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities_summary#compartment_id DataOciLogAnalyticsLogAnalyticsEntitiesSummary#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummaryConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities_summary#namespace DataOciLogAnalyticsLogAnalyticsEntitiesSummary#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummaryConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities_summary#id DataOciLogAnalyticsLogAnalyticsEntitiesSummary#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummaryConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummaryConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummaryConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummaryConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummaryConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummaryConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummaryConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummaryConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities_summary#compartment_id DataOciLogAnalyticsLogAnalyticsEntitiesSummary#compartment_id}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummaryConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities_summary#namespace DataOciLogAnalyticsLogAnalyticsEntitiesSummary#namespace}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummaryConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities_summary#id DataOciLogAnalyticsLogAnalyticsEntitiesSummary#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



