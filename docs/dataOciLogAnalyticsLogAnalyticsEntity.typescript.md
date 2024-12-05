# `dataOciLogAnalyticsLogAnalyticsEntity` Submodule <a name="`dataOciLogAnalyticsLogAnalyticsEntity` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLogAnalyticsLogAnalyticsEntity <a name="DataOciLogAnalyticsLogAnalyticsEntity" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entity oci_log_analytics_log_analytics_entity}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsEntity } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity(scope: Construct, id: string, config: DataOciLogAnalyticsLogAnalyticsEntityConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityConfig">DataOciLogAnalyticsLogAnalyticsEntityConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityConfig">DataOciLogAnalyticsLogAnalyticsEntityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciLogAnalyticsLogAnalyticsEntity resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.isConstruct"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsEntity } from 'rhizo-co-terraform-provider-oci'

dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.isTerraformElement"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsEntity } from 'rhizo-co-terraform-provider-oci'

dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.isTerraformDataSource"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsEntity } from 'rhizo-co-terraform-provider-oci'

dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.generateConfigForImport"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsEntity } from 'rhizo-co-terraform-provider-oci'

dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciLogAnalyticsLogAnalyticsEntity resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciLogAnalyticsLogAnalyticsEntity to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciLogAnalyticsLogAnalyticsEntity that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entity#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLogAnalyticsLogAnalyticsEntity to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.areLogsCollected">areLogsCollected</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.cloudResourceId">cloudResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.entityTypeInternalName">entityTypeInternalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.entityTypeName">entityTypeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.managementAgentCompartmentId">managementAgentCompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.managementAgentDisplayName">managementAgentDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.managementAgentId">managementAgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.metadata">metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataList">DataOciLogAnalyticsLogAnalyticsEntityMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.properties">properties</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.sourceId">sourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.timeLastDiscovered">timeLastDiscovered</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.timezoneRegion">timezoneRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.logAnalyticsEntityIdInput">logAnalyticsEntityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.logAnalyticsEntityId">logAnalyticsEntityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `areLogsCollected`<sup>Required</sup> <a name="areLogsCollected" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.areLogsCollected"></a>

```typescript
public readonly areLogsCollected: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `cloudResourceId`<sup>Required</sup> <a name="cloudResourceId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.cloudResourceId"></a>

```typescript
public readonly cloudResourceId: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `entityTypeInternalName`<sup>Required</sup> <a name="entityTypeInternalName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.entityTypeInternalName"></a>

```typescript
public readonly entityTypeInternalName: string;
```

- *Type:* string

---

##### `entityTypeName`<sup>Required</sup> <a name="entityTypeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.entityTypeName"></a>

```typescript
public readonly entityTypeName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `managementAgentCompartmentId`<sup>Required</sup> <a name="managementAgentCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.managementAgentCompartmentId"></a>

```typescript
public readonly managementAgentCompartmentId: string;
```

- *Type:* string

---

##### `managementAgentDisplayName`<sup>Required</sup> <a name="managementAgentDisplayName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.managementAgentDisplayName"></a>

```typescript
public readonly managementAgentDisplayName: string;
```

- *Type:* string

---

##### `managementAgentId`<sup>Required</sup> <a name="managementAgentId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.managementAgentId"></a>

```typescript
public readonly managementAgentId: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.metadata"></a>

```typescript
public readonly metadata: DataOciLogAnalyticsLogAnalyticsEntityMetadataList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataList">DataOciLogAnalyticsLogAnalyticsEntityMetadataList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.properties"></a>

```typescript
public readonly properties: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `sourceId`<sup>Required</sup> <a name="sourceId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.sourceId"></a>

```typescript
public readonly sourceId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeLastDiscovered`<sup>Required</sup> <a name="timeLastDiscovered" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.timeLastDiscovered"></a>

```typescript
public readonly timeLastDiscovered: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `timezoneRegion`<sup>Required</sup> <a name="timezoneRegion" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.timezoneRegion"></a>

```typescript
public readonly timezoneRegion: string;
```

- *Type:* string

---

##### `logAnalyticsEntityIdInput`<sup>Optional</sup> <a name="logAnalyticsEntityIdInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.logAnalyticsEntityIdInput"></a>

```typescript
public readonly logAnalyticsEntityIdInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `logAnalyticsEntityId`<sup>Required</sup> <a name="logAnalyticsEntityId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.logAnalyticsEntityId"></a>

```typescript
public readonly logAnalyticsEntityId: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntity.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLogAnalyticsLogAnalyticsEntityConfig <a name="DataOciLogAnalyticsLogAnalyticsEntityConfig" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityConfig.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsEntity } from 'rhizo-co-terraform-provider-oci'

const dataOciLogAnalyticsLogAnalyticsEntityConfig: dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityConfig.property.logAnalyticsEntityId">logAnalyticsEntityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entity#log_analytics_entity_id DataOciLogAnalyticsLogAnalyticsEntity#log_analytics_entity_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityConfig.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entity#namespace DataOciLogAnalyticsLogAnalyticsEntity#namespace}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `logAnalyticsEntityId`<sup>Required</sup> <a name="logAnalyticsEntityId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityConfig.property.logAnalyticsEntityId"></a>

```typescript
public readonly logAnalyticsEntityId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entity#log_analytics_entity_id DataOciLogAnalyticsLogAnalyticsEntity#log_analytics_entity_id}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entity#namespace DataOciLogAnalyticsLogAnalyticsEntity#namespace}.

---

### DataOciLogAnalyticsLogAnalyticsEntityMetadata <a name="DataOciLogAnalyticsLogAnalyticsEntityMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadata.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsEntity } from 'rhizo-co-terraform-provider-oci'

const dataOciLogAnalyticsLogAnalyticsEntityMetadata: dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadata = { ... }
```


### DataOciLogAnalyticsLogAnalyticsEntityMetadataItems <a name="DataOciLogAnalyticsLogAnalyticsEntityMetadataItems" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItems.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsEntity } from 'rhizo-co-terraform-provider-oci'

const dataOciLogAnalyticsLogAnalyticsEntityMetadataItems: dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsList <a name="DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsList.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsEntity } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsList.get"></a>

```typescript
public get(index: number): DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference <a name="DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsEntity } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItems">DataOciLogAnalyticsLogAnalyticsEntityMetadataItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciLogAnalyticsLogAnalyticsEntityMetadataItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItems">DataOciLogAnalyticsLogAnalyticsEntityMetadataItems</a>

---


### DataOciLogAnalyticsLogAnalyticsEntityMetadataList <a name="DataOciLogAnalyticsLogAnalyticsEntityMetadataList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataList.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsEntity } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataList.get"></a>

```typescript
public get(index: number): DataOciLogAnalyticsLogAnalyticsEntityMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciLogAnalyticsLogAnalyticsEntityMetadataOutputReference <a name="DataOciLogAnalyticsLogAnalyticsEntityMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataOutputReference.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsEntity } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsList">DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadata">DataOciLogAnalyticsLogAnalyticsEntityMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataOutputReference.property.items"></a>

```typescript
public readonly items: DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsList">DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciLogAnalyticsLogAnalyticsEntityMetadata;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntity.DataOciLogAnalyticsLogAnalyticsEntityMetadata">DataOciLogAnalyticsLogAnalyticsEntityMetadata</a>

---



