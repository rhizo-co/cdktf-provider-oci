# `dataOciStackMonitoringBaselineableMetrics` Submodule <a name="`dataOciStackMonitoringBaselineableMetrics` Submodule" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciStackMonitoringBaselineableMetrics <a name="DataOciStackMonitoringBaselineableMetrics" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics oci_stack_monitoring_baselineable_metrics}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.Initializer"></a>

```typescript
import { dataOciStackMonitoringBaselineableMetrics } from 'rhizo-co-terraform-provider-oci'

new dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics(scope: Construct, id: string, config?: DataOciStackMonitoringBaselineableMetricsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsConfig">DataOciStackMonitoringBaselineableMetricsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsConfig">DataOciStackMonitoringBaselineableMetricsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.resetBaselineableMetricId">resetBaselineableMetricId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.resetIsOutOfBox">resetIsOutOfBox</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.resetMetricNamespace">resetMetricNamespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.resetResourceGroup">resetResourceGroup</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.resetResourceType">resetResourceType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciStackMonitoringBaselineableMetricsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilter">DataOciStackMonitoringBaselineableMetricsFilter</a>[]

---

##### `resetBaselineableMetricId` <a name="resetBaselineableMetricId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.resetBaselineableMetricId"></a>

```typescript
public resetBaselineableMetricId(): void
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsOutOfBox` <a name="resetIsOutOfBox" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.resetIsOutOfBox"></a>

```typescript
public resetIsOutOfBox(): void
```

##### `resetMetricNamespace` <a name="resetMetricNamespace" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.resetMetricNamespace"></a>

```typescript
public resetMetricNamespace(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.resetName"></a>

```typescript
public resetName(): void
```

##### `resetResourceGroup` <a name="resetResourceGroup" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.resetResourceGroup"></a>

```typescript
public resetResourceGroup(): void
```

##### `resetResourceType` <a name="resetResourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.resetResourceType"></a>

```typescript
public resetResourceType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciStackMonitoringBaselineableMetrics resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.isConstruct"></a>

```typescript
import { dataOciStackMonitoringBaselineableMetrics } from 'rhizo-co-terraform-provider-oci'

dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.isTerraformElement"></a>

```typescript
import { dataOciStackMonitoringBaselineableMetrics } from 'rhizo-co-terraform-provider-oci'

dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.isTerraformDataSource"></a>

```typescript
import { dataOciStackMonitoringBaselineableMetrics } from 'rhizo-co-terraform-provider-oci'

dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.generateConfigForImport"></a>

```typescript
import { dataOciStackMonitoringBaselineableMetrics } from 'rhizo-co-terraform-provider-oci'

dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciStackMonitoringBaselineableMetrics resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciStackMonitoringBaselineableMetrics to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciStackMonitoringBaselineableMetrics that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciStackMonitoringBaselineableMetrics to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.baselineableMetricSummaryCollection">baselineableMetricSummaryCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionList">DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterList">DataOciStackMonitoringBaselineableMetricsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.baselineableMetricIdInput">baselineableMetricIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilter">DataOciStackMonitoringBaselineableMetricsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.isOutOfBoxInput">isOutOfBoxInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.metricNamespaceInput">metricNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.resourceGroupInput">resourceGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.resourceTypeInput">resourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.baselineableMetricId">baselineableMetricId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.isOutOfBox">isOutOfBox</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.metricNamespace">metricNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.resourceGroup">resourceGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `baselineableMetricSummaryCollection`<sup>Required</sup> <a name="baselineableMetricSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.baselineableMetricSummaryCollection"></a>

```typescript
public readonly baselineableMetricSummaryCollection: DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionList">DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.filter"></a>

```typescript
public readonly filter: DataOciStackMonitoringBaselineableMetricsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterList">DataOciStackMonitoringBaselineableMetricsFilterList</a>

---

##### `baselineableMetricIdInput`<sup>Optional</sup> <a name="baselineableMetricIdInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.baselineableMetricIdInput"></a>

```typescript
public readonly baselineableMetricIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciStackMonitoringBaselineableMetricsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilter">DataOciStackMonitoringBaselineableMetricsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isOutOfBoxInput`<sup>Optional</sup> <a name="isOutOfBoxInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.isOutOfBoxInput"></a>

```typescript
public readonly isOutOfBoxInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `metricNamespaceInput`<sup>Optional</sup> <a name="metricNamespaceInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.metricNamespaceInput"></a>

```typescript
public readonly metricNamespaceInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupInput`<sup>Optional</sup> <a name="resourceGroupInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.resourceGroupInput"></a>

```typescript
public readonly resourceGroupInput: string;
```

- *Type:* string

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.resourceTypeInput"></a>

```typescript
public readonly resourceTypeInput: string;
```

- *Type:* string

---

##### `baselineableMetricId`<sup>Required</sup> <a name="baselineableMetricId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.baselineableMetricId"></a>

```typescript
public readonly baselineableMetricId: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isOutOfBox`<sup>Required</sup> <a name="isOutOfBox" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.isOutOfBox"></a>

```typescript
public readonly isOutOfBox: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `metricNamespace`<sup>Required</sup> <a name="metricNamespace" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.metricNamespace"></a>

```typescript
public readonly metricNamespace: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroup`<sup>Required</sup> <a name="resourceGroup" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.resourceGroup"></a>

```typescript
public readonly resourceGroup: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollection <a name="DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollection.Initializer"></a>

```typescript
import { dataOciStackMonitoringBaselineableMetrics } from 'rhizo-co-terraform-provider-oci'

const dataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollection: dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollection = { ... }
```


### DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItems <a name="DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItems.Initializer"></a>

```typescript
import { dataOciStackMonitoringBaselineableMetrics } from 'rhizo-co-terraform-provider-oci'

const dataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItems: dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItems = { ... }
```


### DataOciStackMonitoringBaselineableMetricsConfig <a name="DataOciStackMonitoringBaselineableMetricsConfig" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsConfig.Initializer"></a>

```typescript
import { dataOciStackMonitoringBaselineableMetrics } from 'rhizo-co-terraform-provider-oci'

const dataOciStackMonitoringBaselineableMetricsConfig: dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsConfig.property.baselineableMetricId">baselineableMetricId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics#baselineable_metric_id DataOciStackMonitoringBaselineableMetrics#baselineable_metric_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics#compartment_id DataOciStackMonitoringBaselineableMetrics#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilter">DataOciStackMonitoringBaselineableMetricsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics#id DataOciStackMonitoringBaselineableMetrics#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsConfig.property.isOutOfBox">isOutOfBox</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics#is_out_of_box DataOciStackMonitoringBaselineableMetrics#is_out_of_box}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsConfig.property.metricNamespace">metricNamespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics#metric_namespace DataOciStackMonitoringBaselineableMetrics#metric_namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics#name DataOciStackMonitoringBaselineableMetrics#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsConfig.property.resourceGroup">resourceGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics#resource_group DataOciStackMonitoringBaselineableMetrics#resource_group}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsConfig.property.resourceType">resourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics#resource_type DataOciStackMonitoringBaselineableMetrics#resource_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `baselineableMetricId`<sup>Optional</sup> <a name="baselineableMetricId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsConfig.property.baselineableMetricId"></a>

```typescript
public readonly baselineableMetricId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics#baselineable_metric_id DataOciStackMonitoringBaselineableMetrics#baselineable_metric_id}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics#compartment_id DataOciStackMonitoringBaselineableMetrics#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciStackMonitoringBaselineableMetricsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilter">DataOciStackMonitoringBaselineableMetricsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics#filter DataOciStackMonitoringBaselineableMetrics#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics#id DataOciStackMonitoringBaselineableMetrics#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isOutOfBox`<sup>Optional</sup> <a name="isOutOfBox" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsConfig.property.isOutOfBox"></a>

```typescript
public readonly isOutOfBox: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics#is_out_of_box DataOciStackMonitoringBaselineableMetrics#is_out_of_box}.

---

##### `metricNamespace`<sup>Optional</sup> <a name="metricNamespace" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsConfig.property.metricNamespace"></a>

```typescript
public readonly metricNamespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics#metric_namespace DataOciStackMonitoringBaselineableMetrics#metric_namespace}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics#name DataOciStackMonitoringBaselineableMetrics#name}.

---

##### `resourceGroup`<sup>Optional</sup> <a name="resourceGroup" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsConfig.property.resourceGroup"></a>

```typescript
public readonly resourceGroup: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics#resource_group DataOciStackMonitoringBaselineableMetrics#resource_group}.

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsConfig.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics#resource_type DataOciStackMonitoringBaselineableMetrics#resource_type}.

---

### DataOciStackMonitoringBaselineableMetricsFilter <a name="DataOciStackMonitoringBaselineableMetricsFilter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilter.Initializer"></a>

```typescript
import { dataOciStackMonitoringBaselineableMetrics } from 'rhizo-co-terraform-provider-oci'

const dataOciStackMonitoringBaselineableMetricsFilter: dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics#name DataOciStackMonitoringBaselineableMetrics#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics#values DataOciStackMonitoringBaselineableMetrics#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics#regex DataOciStackMonitoringBaselineableMetrics#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics#name DataOciStackMonitoringBaselineableMetrics#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics#values DataOciStackMonitoringBaselineableMetrics#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics#regex DataOciStackMonitoringBaselineableMetrics#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsList <a name="DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsList.Initializer"></a>

```typescript
import { dataOciStackMonitoringBaselineableMetrics } from 'rhizo-co-terraform-provider-oci'

new dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference <a name="DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciStackMonitoringBaselineableMetrics } from 'rhizo-co-terraform-provider-oci'

new dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.column">column</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.isOutOfBox">isOutOfBox</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.lastUpdatedBy">lastUpdatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.resourceGroup">resourceGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.tenancyId">tenancyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.timeLastUpdated">timeLastUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItems">DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `column`<sup>Required</sup> <a name="column" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.column"></a>

```typescript
public readonly column: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isOutOfBox`<sup>Required</sup> <a name="isOutOfBox" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.isOutOfBox"></a>

```typescript
public readonly isOutOfBox: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lastUpdatedBy`<sup>Required</sup> <a name="lastUpdatedBy" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.lastUpdatedBy"></a>

```typescript
public readonly lastUpdatedBy: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `resourceGroup`<sup>Required</sup> <a name="resourceGroup" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.resourceGroup"></a>

```typescript
public readonly resourceGroup: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `tenancyId`<sup>Required</sup> <a name="tenancyId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.tenancyId"></a>

```typescript
public readonly tenancyId: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeLastUpdated`<sup>Required</sup> <a name="timeLastUpdated" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.timeLastUpdated"></a>

```typescript
public readonly timeLastUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItems">DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItems</a>

---


### DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionList <a name="DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionList.Initializer"></a>

```typescript
import { dataOciStackMonitoringBaselineableMetrics } from 'rhizo-co-terraform-provider-oci'

new dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionList.get"></a>

```typescript
public get(index: number): DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference <a name="DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciStackMonitoringBaselineableMetrics } from 'rhizo-co-terraform-provider-oci'

new dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsList">DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollection">DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsList">DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollection">DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollection</a>

---


### DataOciStackMonitoringBaselineableMetricsFilterList <a name="DataOciStackMonitoringBaselineableMetricsFilterList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterList.Initializer"></a>

```typescript
import { dataOciStackMonitoringBaselineableMetrics } from 'rhizo-co-terraform-provider-oci'

new dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterList.get"></a>

```typescript
public get(index: number): DataOciStackMonitoringBaselineableMetricsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilter">DataOciStackMonitoringBaselineableMetricsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciStackMonitoringBaselineableMetricsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilter">DataOciStackMonitoringBaselineableMetricsFilter</a>[]

---


### DataOciStackMonitoringBaselineableMetricsFilterOutputReference <a name="DataOciStackMonitoringBaselineableMetricsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciStackMonitoringBaselineableMetrics } from 'rhizo-co-terraform-provider-oci'

new dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilter">DataOciStackMonitoringBaselineableMetricsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciStackMonitoringBaselineableMetricsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilter">DataOciStackMonitoringBaselineableMetricsFilter</a>

---



