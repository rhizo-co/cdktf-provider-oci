# `dataOciLogAnalyticsLogAnalyticsLogGroupsSummary` Submodule <a name="`dataOciLogAnalyticsLogAnalyticsLogGroupsSummary` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLogAnalyticsLogAnalyticsLogGroupsSummary <a name="DataOciLogAnalyticsLogAnalyticsLogGroupsSummary" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_log_groups_summary oci_log_analytics_log_analytics_log_groups_summary}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsLogGroupsSummary } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary(scope: Construct, id: string, config: DataOciLogAnalyticsLogAnalyticsLogGroupsSummaryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummaryConfig">DataOciLogAnalyticsLogAnalyticsLogGroupsSummaryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummaryConfig">DataOciLogAnalyticsLogAnalyticsLogGroupsSummaryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciLogAnalyticsLogAnalyticsLogGroupsSummary resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.isConstruct"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsLogGroupsSummary } from 'rhizo-co-terraform-provider-oci'

dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.isTerraformElement"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsLogGroupsSummary } from 'rhizo-co-terraform-provider-oci'

dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.isTerraformDataSource"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsLogGroupsSummary } from 'rhizo-co-terraform-provider-oci'

dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.generateConfigForImport"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsLogGroupsSummary } from 'rhizo-co-terraform-provider-oci'

dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciLogAnalyticsLogAnalyticsLogGroupsSummary resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciLogAnalyticsLogAnalyticsLogGroupsSummary to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciLogAnalyticsLogAnalyticsLogGroupsSummary that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_log_groups_summary#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLogAnalyticsLogAnalyticsLogGroupsSummary to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.logGroupCount">logGroupCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `logGroupCount`<sup>Required</sup> <a name="logGroupCount" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.logGroupCount"></a>

```typescript
public readonly logGroupCount: number;
```

- *Type:* number

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLogAnalyticsLogAnalyticsLogGroupsSummaryConfig <a name="DataOciLogAnalyticsLogAnalyticsLogGroupsSummaryConfig" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummaryConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummaryConfig.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsLogGroupsSummary } from 'rhizo-co-terraform-provider-oci'

const dataOciLogAnalyticsLogAnalyticsLogGroupsSummaryConfig: dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummaryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummaryConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummaryConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummaryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummaryConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummaryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummaryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummaryConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummaryConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_log_groups_summary#compartment_id DataOciLogAnalyticsLogAnalyticsLogGroupsSummary#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummaryConfig.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_log_groups_summary#namespace DataOciLogAnalyticsLogAnalyticsLogGroupsSummary#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummaryConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_log_groups_summary#id DataOciLogAnalyticsLogAnalyticsLogGroupsSummary#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummaryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummaryConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummaryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummaryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummaryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummaryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummaryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummaryConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_log_groups_summary#compartment_id DataOciLogAnalyticsLogAnalyticsLogGroupsSummary#compartment_id}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummaryConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_log_groups_summary#namespace DataOciLogAnalyticsLogAnalyticsLogGroupsSummary#namespace}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummaryConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_log_groups_summary#id DataOciLogAnalyticsLogAnalyticsLogGroupsSummary#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



