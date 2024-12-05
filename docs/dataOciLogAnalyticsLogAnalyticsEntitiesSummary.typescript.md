# `dataOciLogAnalyticsLogAnalyticsEntitiesSummary` Submodule <a name="`dataOciLogAnalyticsLogAnalyticsEntitiesSummary` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLogAnalyticsLogAnalyticsEntitiesSummary <a name="DataOciLogAnalyticsLogAnalyticsEntitiesSummary" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities_summary oci_log_analytics_log_analytics_entities_summary}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsEntitiesSummary } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary(scope: Construct, id: string, config: DataOciLogAnalyticsLogAnalyticsEntitiesSummaryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummaryConfig">DataOciLogAnalyticsLogAnalyticsEntitiesSummaryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummaryConfig">DataOciLogAnalyticsLogAnalyticsEntitiesSummaryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciLogAnalyticsLogAnalyticsEntitiesSummary resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.isConstruct"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsEntitiesSummary } from 'rhizo-co-terraform-provider-oci'

dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.isTerraformElement"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsEntitiesSummary } from 'rhizo-co-terraform-provider-oci'

dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.isTerraformDataSource"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsEntitiesSummary } from 'rhizo-co-terraform-provider-oci'

dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.generateConfigForImport"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsEntitiesSummary } from 'rhizo-co-terraform-provider-oci'

dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciLogAnalyticsLogAnalyticsEntitiesSummary resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciLogAnalyticsLogAnalyticsEntitiesSummary to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciLogAnalyticsLogAnalyticsEntitiesSummary that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities_summary#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLogAnalyticsLogAnalyticsEntitiesSummary to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.activeEntitiesCount">activeEntitiesCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.entitiesWithHasLogsCollectedCount">entitiesWithHasLogsCollectedCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.entitiesWithManagementAgentCount">entitiesWithManagementAgentCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `activeEntitiesCount`<sup>Required</sup> <a name="activeEntitiesCount" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.activeEntitiesCount"></a>

```typescript
public readonly activeEntitiesCount: number;
```

- *Type:* number

---

##### `entitiesWithHasLogsCollectedCount`<sup>Required</sup> <a name="entitiesWithHasLogsCollectedCount" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.entitiesWithHasLogsCollectedCount"></a>

```typescript
public readonly entitiesWithHasLogsCollectedCount: number;
```

- *Type:* number

---

##### `entitiesWithManagementAgentCount`<sup>Required</sup> <a name="entitiesWithManagementAgentCount" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.entitiesWithManagementAgentCount"></a>

```typescript
public readonly entitiesWithManagementAgentCount: number;
```

- *Type:* number

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummary.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLogAnalyticsLogAnalyticsEntitiesSummaryConfig <a name="DataOciLogAnalyticsLogAnalyticsEntitiesSummaryConfig" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummaryConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummaryConfig.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsEntitiesSummary } from 'rhizo-co-terraform-provider-oci'

const dataOciLogAnalyticsLogAnalyticsEntitiesSummaryConfig: dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummaryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummaryConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummaryConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummaryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummaryConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummaryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummaryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummaryConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummaryConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities_summary#compartment_id DataOciLogAnalyticsLogAnalyticsEntitiesSummary#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummaryConfig.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities_summary#namespace DataOciLogAnalyticsLogAnalyticsEntitiesSummary#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummaryConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities_summary#id DataOciLogAnalyticsLogAnalyticsEntitiesSummary#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummaryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummaryConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummaryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummaryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummaryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummaryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummaryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummaryConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities_summary#compartment_id DataOciLogAnalyticsLogAnalyticsEntitiesSummary#compartment_id}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummaryConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities_summary#namespace DataOciLogAnalyticsLogAnalyticsEntitiesSummary#namespace}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntitiesSummary.DataOciLogAnalyticsLogAnalyticsEntitiesSummaryConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities_summary#id DataOciLogAnalyticsLogAnalyticsEntitiesSummary#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



