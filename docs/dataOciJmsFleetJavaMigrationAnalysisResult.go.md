# `dataOciJmsFleetJavaMigrationAnalysisResult` Submodule <a name="`dataOciJmsFleetJavaMigrationAnalysisResult` Submodule" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciJmsFleetJavaMigrationAnalysisResult <a name="DataOciJmsFleetJavaMigrationAnalysisResult" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_result oci_jms_fleet_java_migration_analysis_result}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsfleetjavamigrationanalysisresult"

dataocijmsfleetjavamigrationanalysisresult.NewDataOciJmsFleetJavaMigrationAnalysisResult(scope Construct, id *string, config DataOciJmsFleetJavaMigrationAnalysisResultConfig) DataOciJmsFleetJavaMigrationAnalysisResult
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResultConfig">DataOciJmsFleetJavaMigrationAnalysisResultConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResultConfig">DataOciJmsFleetJavaMigrationAnalysisResultConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciJmsFleetJavaMigrationAnalysisResult resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsfleetjavamigrationanalysisresult"

dataocijmsfleetjavamigrationanalysisresult.DataOciJmsFleetJavaMigrationAnalysisResult_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsfleetjavamigrationanalysisresult"

dataocijmsfleetjavamigrationanalysisresult.DataOciJmsFleetJavaMigrationAnalysisResult_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsfleetjavamigrationanalysisresult"

dataocijmsfleetjavamigrationanalysisresult.DataOciJmsFleetJavaMigrationAnalysisResult_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsfleetjavamigrationanalysisresult"

dataocijmsfleetjavamigrationanalysisresult.DataOciJmsFleetJavaMigrationAnalysisResult_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciJmsFleetJavaMigrationAnalysisResult resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciJmsFleetJavaMigrationAnalysisResult to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciJmsFleetJavaMigrationAnalysisResult that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_result#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciJmsFleetJavaMigrationAnalysisResult to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.applicationExecutionType">ApplicationExecutionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.applicationKey">ApplicationKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.applicationName">ApplicationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.applicationPath">ApplicationPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.hostName">HostName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.managedInstanceId">ManagedInstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.metadata">Metadata</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.objectList">ObjectList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.objectStorageUploadDirPath">ObjectStorageUploadDirPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.sourceJdkVersion">SourceJdkVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.targetJdkVersion">TargetJdkVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.workRequestId">WorkRequestId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.fleetIdInput">FleetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.javaMigrationAnalysisResultIdInput">JavaMigrationAnalysisResultIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.fleetId">FleetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.javaMigrationAnalysisResultId">JavaMigrationAnalysisResultId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ApplicationExecutionType`<sup>Required</sup> <a name="ApplicationExecutionType" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.applicationExecutionType"></a>

```go
func ApplicationExecutionType() *string
```

- *Type:* *string

---

##### `ApplicationKey`<sup>Required</sup> <a name="ApplicationKey" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.applicationKey"></a>

```go
func ApplicationKey() *string
```

- *Type:* *string

---

##### `ApplicationName`<sup>Required</sup> <a name="ApplicationName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.applicationName"></a>

```go
func ApplicationName() *string
```

- *Type:* *string

---

##### `ApplicationPath`<sup>Required</sup> <a name="ApplicationPath" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.applicationPath"></a>

```go
func ApplicationPath() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.hostName"></a>

```go
func HostName() *string
```

- *Type:* *string

---

##### `ManagedInstanceId`<sup>Required</sup> <a name="ManagedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.managedInstanceId"></a>

```go
func ManagedInstanceId() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.metadata"></a>

```go
func Metadata() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `ObjectList`<sup>Required</sup> <a name="ObjectList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.objectList"></a>

```go
func ObjectList() *[]*string
```

- *Type:* *[]*string

---

##### `ObjectStorageUploadDirPath`<sup>Required</sup> <a name="ObjectStorageUploadDirPath" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.objectStorageUploadDirPath"></a>

```go
func ObjectStorageUploadDirPath() *string
```

- *Type:* *string

---

##### `SourceJdkVersion`<sup>Required</sup> <a name="SourceJdkVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.sourceJdkVersion"></a>

```go
func SourceJdkVersion() *string
```

- *Type:* *string

---

##### `TargetJdkVersion`<sup>Required</sup> <a name="TargetJdkVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.targetJdkVersion"></a>

```go
func TargetJdkVersion() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `WorkRequestId`<sup>Required</sup> <a name="WorkRequestId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.workRequestId"></a>

```go
func WorkRequestId() *string
```

- *Type:* *string

---

##### `FleetIdInput`<sup>Optional</sup> <a name="FleetIdInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.fleetIdInput"></a>

```go
func FleetIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `JavaMigrationAnalysisResultIdInput`<sup>Optional</sup> <a name="JavaMigrationAnalysisResultIdInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.javaMigrationAnalysisResultIdInput"></a>

```go
func JavaMigrationAnalysisResultIdInput() *string
```

- *Type:* *string

---

##### `FleetId`<sup>Required</sup> <a name="FleetId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.fleetId"></a>

```go
func FleetId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `JavaMigrationAnalysisResultId`<sup>Required</sup> <a name="JavaMigrationAnalysisResultId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.javaMigrationAnalysisResultId"></a>

```go
func JavaMigrationAnalysisResultId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResult.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciJmsFleetJavaMigrationAnalysisResultConfig <a name="DataOciJmsFleetJavaMigrationAnalysisResultConfig" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResultConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResultConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsfleetjavamigrationanalysisresult"

&dataocijmsfleetjavamigrationanalysisresult.DataOciJmsFleetJavaMigrationAnalysisResultConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	FleetId: *string,
	JavaMigrationAnalysisResultId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResultConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResultConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResultConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResultConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResultConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResultConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResultConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResultConfig.property.fleetId">FleetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_result#fleet_id DataOciJmsFleetJavaMigrationAnalysisResult#fleet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResultConfig.property.javaMigrationAnalysisResultId">JavaMigrationAnalysisResultId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_result#java_migration_analysis_result_id DataOciJmsFleetJavaMigrationAnalysisResult#java_migration_analysis_result_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResultConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_result#id DataOciJmsFleetJavaMigrationAnalysisResult#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResultConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResultConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResultConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResultConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResultConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResultConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResultConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FleetId`<sup>Required</sup> <a name="FleetId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResultConfig.property.fleetId"></a>

```go
FleetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_result#fleet_id DataOciJmsFleetJavaMigrationAnalysisResult#fleet_id}.

---

##### `JavaMigrationAnalysisResultId`<sup>Required</sup> <a name="JavaMigrationAnalysisResultId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResultConfig.property.javaMigrationAnalysisResultId"></a>

```go
JavaMigrationAnalysisResultId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_result#java_migration_analysis_result_id DataOciJmsFleetJavaMigrationAnalysisResult#java_migration_analysis_result_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResult.DataOciJmsFleetJavaMigrationAnalysisResultConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_result#id DataOciJmsFleetJavaMigrationAnalysisResult#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



