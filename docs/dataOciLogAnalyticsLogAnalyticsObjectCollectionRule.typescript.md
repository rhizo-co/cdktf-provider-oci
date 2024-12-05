# `dataOciLogAnalyticsLogAnalyticsObjectCollectionRule` Submodule <a name="`dataOciLogAnalyticsLogAnalyticsObjectCollectionRule` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLogAnalyticsLogAnalyticsObjectCollectionRule <a name="DataOciLogAnalyticsLogAnalyticsObjectCollectionRule" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rule oci_log_analytics_log_analytics_object_collection_rule}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsObjectCollectionRule } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule(scope: Construct, id: string, config: DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleConfig">DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleConfig">DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciLogAnalyticsLogAnalyticsObjectCollectionRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.isConstruct"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsObjectCollectionRule } from 'rhizo-co-terraform-provider-oci'

dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.isTerraformElement"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsObjectCollectionRule } from 'rhizo-co-terraform-provider-oci'

dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.isTerraformDataSource"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsObjectCollectionRule } from 'rhizo-co-terraform-provider-oci'

dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.generateConfigForImport"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsObjectCollectionRule } from 'rhizo-co-terraform-provider-oci'

dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciLogAnalyticsLogAnalyticsObjectCollectionRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciLogAnalyticsLogAnalyticsObjectCollectionRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciLogAnalyticsLogAnalyticsObjectCollectionRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLogAnalyticsLogAnalyticsObjectCollectionRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.charEncoding">charEncoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.collectionType">collectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.entityId">entityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.isEnabled">isEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.isForceHistoricCollection">isForceHistoricCollection</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.logGroupId">logGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.logSet">logSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.logSetExtRegex">logSetExtRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.logSetKey">logSetKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.logSourceName">logSourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.logType">logType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.objectNameFilters">objectNameFilters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.osBucketName">osBucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.osNamespace">osNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.overrides">overrides</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesList">DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.pollSince">pollSince</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.pollTill">pollTill</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.logAnalyticsObjectCollectionRuleIdInput">logAnalyticsObjectCollectionRuleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.logAnalyticsObjectCollectionRuleId">logAnalyticsObjectCollectionRuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `charEncoding`<sup>Required</sup> <a name="charEncoding" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.charEncoding"></a>

```typescript
public readonly charEncoding: string;
```

- *Type:* string

---

##### `collectionType`<sup>Required</sup> <a name="collectionType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.collectionType"></a>

```typescript
public readonly collectionType: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.entityId"></a>

```typescript
public readonly entityId: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.isEnabled"></a>

```typescript
public readonly isEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isForceHistoricCollection`<sup>Required</sup> <a name="isForceHistoricCollection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.isForceHistoricCollection"></a>

```typescript
public readonly isForceHistoricCollection: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `logGroupId`<sup>Required</sup> <a name="logGroupId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.logGroupId"></a>

```typescript
public readonly logGroupId: string;
```

- *Type:* string

---

##### `logSet`<sup>Required</sup> <a name="logSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.logSet"></a>

```typescript
public readonly logSet: string;
```

- *Type:* string

---

##### `logSetExtRegex`<sup>Required</sup> <a name="logSetExtRegex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.logSetExtRegex"></a>

```typescript
public readonly logSetExtRegex: string;
```

- *Type:* string

---

##### `logSetKey`<sup>Required</sup> <a name="logSetKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.logSetKey"></a>

```typescript
public readonly logSetKey: string;
```

- *Type:* string

---

##### `logSourceName`<sup>Required</sup> <a name="logSourceName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.logSourceName"></a>

```typescript
public readonly logSourceName: string;
```

- *Type:* string

---

##### `logType`<sup>Required</sup> <a name="logType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.logType"></a>

```typescript
public readonly logType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `objectNameFilters`<sup>Required</sup> <a name="objectNameFilters" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.objectNameFilters"></a>

```typescript
public readonly objectNameFilters: string[];
```

- *Type:* string[]

---

##### `osBucketName`<sup>Required</sup> <a name="osBucketName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.osBucketName"></a>

```typescript
public readonly osBucketName: string;
```

- *Type:* string

---

##### `osNamespace`<sup>Required</sup> <a name="osNamespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.osNamespace"></a>

```typescript
public readonly osNamespace: string;
```

- *Type:* string

---

##### `overrides`<sup>Required</sup> <a name="overrides" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.overrides"></a>

```typescript
public readonly overrides: DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesList">DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesList</a>

---

##### `pollSince`<sup>Required</sup> <a name="pollSince" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.pollSince"></a>

```typescript
public readonly pollSince: string;
```

- *Type:* string

---

##### `pollTill`<sup>Required</sup> <a name="pollTill" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.pollTill"></a>

```typescript
public readonly pollTill: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

##### `logAnalyticsObjectCollectionRuleIdInput`<sup>Optional</sup> <a name="logAnalyticsObjectCollectionRuleIdInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.logAnalyticsObjectCollectionRuleIdInput"></a>

```typescript
public readonly logAnalyticsObjectCollectionRuleIdInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `logAnalyticsObjectCollectionRuleId`<sup>Required</sup> <a name="logAnalyticsObjectCollectionRuleId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.logAnalyticsObjectCollectionRuleId"></a>

```typescript
public readonly logAnalyticsObjectCollectionRuleId: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleConfig <a name="DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleConfig" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleConfig.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsObjectCollectionRule } from 'rhizo-co-terraform-provider-oci'

const dataOciLogAnalyticsLogAnalyticsObjectCollectionRuleConfig: dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleConfig.property.logAnalyticsObjectCollectionRuleId">logAnalyticsObjectCollectionRuleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rule#log_analytics_object_collection_rule_id DataOciLogAnalyticsLogAnalyticsObjectCollectionRule#log_analytics_object_collection_rule_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleConfig.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rule#namespace DataOciLogAnalyticsLogAnalyticsObjectCollectionRule#namespace}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `logAnalyticsObjectCollectionRuleId`<sup>Required</sup> <a name="logAnalyticsObjectCollectionRuleId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleConfig.property.logAnalyticsObjectCollectionRuleId"></a>

```typescript
public readonly logAnalyticsObjectCollectionRuleId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rule#log_analytics_object_collection_rule_id DataOciLogAnalyticsLogAnalyticsObjectCollectionRule#log_analytics_object_collection_rule_id}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rule#namespace DataOciLogAnalyticsLogAnalyticsObjectCollectionRule#namespace}.

---

### DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverrides <a name="DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverrides" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverrides"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverrides.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsObjectCollectionRule } from 'rhizo-co-terraform-provider-oci'

const dataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverrides: dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverrides = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesList <a name="DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesList.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsObjectCollectionRule } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesList.get"></a>

```typescript
public get(index: number): DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference <a name="DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsObjectCollectionRule } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.property.matchType">matchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.property.matchValue">matchValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.property.propertyName">propertyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.property.propertyValue">propertyValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverrides">DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchType`<sup>Required</sup> <a name="matchType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.property.matchType"></a>

```typescript
public readonly matchType: string;
```

- *Type:* string

---

##### `matchValue`<sup>Required</sup> <a name="matchValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.property.matchValue"></a>

```typescript
public readonly matchValue: string;
```

- *Type:* string

---

##### `propertyName`<sup>Required</sup> <a name="propertyName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.property.propertyName"></a>

```typescript
public readonly propertyName: string;
```

- *Type:* string

---

##### `propertyValue`<sup>Required</sup> <a name="propertyValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.property.propertyValue"></a>

```typescript
public readonly propertyValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverrides;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverrides">DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverrides</a>

---



