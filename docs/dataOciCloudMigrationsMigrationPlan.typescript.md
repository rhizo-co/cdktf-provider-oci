# `dataOciCloudMigrationsMigrationPlan` Submodule <a name="`dataOciCloudMigrationsMigrationPlan` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCloudMigrationsMigrationPlan <a name="DataOciCloudMigrationsMigrationPlan" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan oci_cloud_migrations_migration_plan}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.Initializer"></a>

```typescript
import { dataOciCloudMigrationsMigrationPlan } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan(scope: Construct, id: string, config: DataOciCloudMigrationsMigrationPlanConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanConfig">DataOciCloudMigrationsMigrationPlanConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanConfig">DataOciCloudMigrationsMigrationPlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCloudMigrationsMigrationPlan resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.isConstruct"></a>

```typescript
import { dataOciCloudMigrationsMigrationPlan } from 'rhizo-co-terraform-provider-oci'

dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.isTerraformElement"></a>

```typescript
import { dataOciCloudMigrationsMigrationPlan } from 'rhizo-co-terraform-provider-oci'

dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.isTerraformDataSource"></a>

```typescript
import { dataOciCloudMigrationsMigrationPlan } from 'rhizo-co-terraform-provider-oci'

dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.generateConfigForImport"></a>

```typescript
import { dataOciCloudMigrationsMigrationPlan } from 'rhizo-co-terraform-provider-oci'

dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCloudMigrationsMigrationPlan resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCloudMigrationsMigrationPlan to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCloudMigrationsMigrationPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCloudMigrationsMigrationPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.calculatedLimits">calculatedLimits</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.migrationId">migrationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.migrationPlanStats">migrationPlanStats</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsList">DataOciCloudMigrationsMigrationPlanMigrationPlanStatsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.referenceToRmsStack">referenceToRmsStack</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.sourceMigrationPlanId">sourceMigrationPlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.strategies">strategies</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesList">DataOciCloudMigrationsMigrationPlanStrategiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.targetEnvironments">targetEnvironments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsList">DataOciCloudMigrationsMigrationPlanTargetEnvironmentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.migrationPlanIdInput">migrationPlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.migrationPlanId">migrationPlanId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `calculatedLimits`<sup>Required</sup> <a name="calculatedLimits" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.calculatedLimits"></a>

```typescript
public readonly calculatedLimits: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `migrationId`<sup>Required</sup> <a name="migrationId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.migrationId"></a>

```typescript
public readonly migrationId: string;
```

- *Type:* string

---

##### `migrationPlanStats`<sup>Required</sup> <a name="migrationPlanStats" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.migrationPlanStats"></a>

```typescript
public readonly migrationPlanStats: DataOciCloudMigrationsMigrationPlanMigrationPlanStatsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsList">DataOciCloudMigrationsMigrationPlanMigrationPlanStatsList</a>

---

##### `referenceToRmsStack`<sup>Required</sup> <a name="referenceToRmsStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.referenceToRmsStack"></a>

```typescript
public readonly referenceToRmsStack: string;
```

- *Type:* string

---

##### `sourceMigrationPlanId`<sup>Required</sup> <a name="sourceMigrationPlanId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.sourceMigrationPlanId"></a>

```typescript
public readonly sourceMigrationPlanId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `strategies`<sup>Required</sup> <a name="strategies" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.strategies"></a>

```typescript
public readonly strategies: DataOciCloudMigrationsMigrationPlanStrategiesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesList">DataOciCloudMigrationsMigrationPlanStrategiesList</a>

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `targetEnvironments`<sup>Required</sup> <a name="targetEnvironments" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.targetEnvironments"></a>

```typescript
public readonly targetEnvironments: DataOciCloudMigrationsMigrationPlanTargetEnvironmentsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsList">DataOciCloudMigrationsMigrationPlanTargetEnvironmentsList</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `migrationPlanIdInput`<sup>Optional</sup> <a name="migrationPlanIdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.migrationPlanIdInput"></a>

```typescript
public readonly migrationPlanIdInput: string;
```

- *Type:* string

---

##### `migrationPlanId`<sup>Required</sup> <a name="migrationPlanId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.migrationPlanId"></a>

```typescript
public readonly migrationPlanId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlan.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCloudMigrationsMigrationPlanConfig <a name="DataOciCloudMigrationsMigrationPlanConfig" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanConfig.Initializer"></a>

```typescript
import { dataOciCloudMigrationsMigrationPlan } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudMigrationsMigrationPlanConfig: dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanConfig.property.migrationPlanId">migrationPlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan#migration_plan_id DataOciCloudMigrationsMigrationPlan#migration_plan_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `migrationPlanId`<sup>Required</sup> <a name="migrationPlanId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanConfig.property.migrationPlanId"></a>

```typescript
public readonly migrationPlanId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan#migration_plan_id DataOciCloudMigrationsMigrationPlan#migration_plan_id}.

---

### DataOciCloudMigrationsMigrationPlanMigrationPlanStats <a name="DataOciCloudMigrationsMigrationPlanMigrationPlanStats" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStats"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStats.Initializer"></a>

```typescript
import { dataOciCloudMigrationsMigrationPlan } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudMigrationsMigrationPlanMigrationPlanStats: dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStats = { ... }
```


### DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCost <a name="DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCost" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCost"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCost.Initializer"></a>

```typescript
import { dataOciCloudMigrationsMigrationPlan } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCost: dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCost = { ... }
```


### DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostCompute <a name="DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostCompute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostCompute"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostCompute.Initializer"></a>

```typescript
import { dataOciCloudMigrationsMigrationPlan } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostCompute: dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostCompute = { ... }
```


### DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImage <a name="DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImage" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImage.Initializer"></a>

```typescript
import { dataOciCloudMigrationsMigrationPlan } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImage: dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImage = { ... }
```


### DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorage <a name="DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorage" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorage.Initializer"></a>

```typescript
import { dataOciCloudMigrationsMigrationPlan } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorage: dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorage = { ... }
```


### DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumes <a name="DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumes" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumes.Initializer"></a>

```typescript
import { dataOciCloudMigrationsMigrationPlan } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumes: dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumes = { ... }
```


### DataOciCloudMigrationsMigrationPlanStrategies <a name="DataOciCloudMigrationsMigrationPlanStrategies" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategies"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategies.Initializer"></a>

```typescript
import { dataOciCloudMigrationsMigrationPlan } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudMigrationsMigrationPlanStrategies: dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategies = { ... }
```


### DataOciCloudMigrationsMigrationPlanTargetEnvironments <a name="DataOciCloudMigrationsMigrationPlanTargetEnvironments" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironments.Initializer"></a>

```typescript
import { dataOciCloudMigrationsMigrationPlan } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudMigrationsMigrationPlanTargetEnvironments: dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironments = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCloudMigrationsMigrationPlanMigrationPlanStatsList <a name="DataOciCloudMigrationsMigrationPlanMigrationPlanStatsList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsList.Initializer"></a>

```typescript
import { dataOciCloudMigrationsMigrationPlan } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsList.get"></a>

```typescript
public get(index: number): DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference <a name="DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.Initializer"></a>

```typescript
import { dataOciCloudMigrationsMigrationPlan } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.property.totalEstimatedCost">totalEstimatedCost</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList">DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.property.vmCount">vmCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStats">DataOciCloudMigrationsMigrationPlanMigrationPlanStats</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `totalEstimatedCost`<sup>Required</sup> <a name="totalEstimatedCost" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.property.totalEstimatedCost"></a>

```typescript
public readonly totalEstimatedCost: DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList">DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList</a>

---

##### `vmCount`<sup>Required</sup> <a name="vmCount" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.property.vmCount"></a>

```typescript
public readonly vmCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudMigrationsMigrationPlanMigrationPlanStats;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStats">DataOciCloudMigrationsMigrationPlanMigrationPlanStats</a>

---


### DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList <a name="DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.Initializer"></a>

```typescript
import { dataOciCloudMigrationsMigrationPlan } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.get"></a>

```typescript
public get(index: number): DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference <a name="DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer"></a>

```typescript
import { dataOciCloudMigrationsMigrationPlan } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.gpuCount">gpuCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.gpuPerHour">gpuPerHour</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.gpuPerHourBySubscription">gpuPerHourBySubscription</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.memoryAmountGb">memoryAmountGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.memoryGbPerHour">memoryGbPerHour</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.memoryGbPerHourBySubscription">memoryGbPerHourBySubscription</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.ocpuCount">ocpuCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.ocpuPerHour">ocpuPerHour</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.ocpuPerHourBySubscription">ocpuPerHourBySubscription</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.totalPerHour">totalPerHour</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.totalPerHourBySubscription">totalPerHourBySubscription</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostCompute">DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostCompute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gpuCount`<sup>Required</sup> <a name="gpuCount" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.gpuCount"></a>

```typescript
public readonly gpuCount: number;
```

- *Type:* number

---

##### `gpuPerHour`<sup>Required</sup> <a name="gpuPerHour" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.gpuPerHour"></a>

```typescript
public readonly gpuPerHour: number;
```

- *Type:* number

---

##### `gpuPerHourBySubscription`<sup>Required</sup> <a name="gpuPerHourBySubscription" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.gpuPerHourBySubscription"></a>

```typescript
public readonly gpuPerHourBySubscription: number;
```

- *Type:* number

---

##### `memoryAmountGb`<sup>Required</sup> <a name="memoryAmountGb" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.memoryAmountGb"></a>

```typescript
public readonly memoryAmountGb: number;
```

- *Type:* number

---

##### `memoryGbPerHour`<sup>Required</sup> <a name="memoryGbPerHour" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.memoryGbPerHour"></a>

```typescript
public readonly memoryGbPerHour: number;
```

- *Type:* number

---

##### `memoryGbPerHourBySubscription`<sup>Required</sup> <a name="memoryGbPerHourBySubscription" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.memoryGbPerHourBySubscription"></a>

```typescript
public readonly memoryGbPerHourBySubscription: number;
```

- *Type:* number

---

##### `ocpuCount`<sup>Required</sup> <a name="ocpuCount" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.ocpuCount"></a>

```typescript
public readonly ocpuCount: number;
```

- *Type:* number

---

##### `ocpuPerHour`<sup>Required</sup> <a name="ocpuPerHour" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.ocpuPerHour"></a>

```typescript
public readonly ocpuPerHour: number;
```

- *Type:* number

---

##### `ocpuPerHourBySubscription`<sup>Required</sup> <a name="ocpuPerHourBySubscription" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.ocpuPerHourBySubscription"></a>

```typescript
public readonly ocpuPerHourBySubscription: number;
```

- *Type:* number

---

##### `totalPerHour`<sup>Required</sup> <a name="totalPerHour" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.totalPerHour"></a>

```typescript
public readonly totalPerHour: number;
```

- *Type:* number

---

##### `totalPerHourBySubscription`<sup>Required</sup> <a name="totalPerHourBySubscription" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.totalPerHourBySubscription"></a>

```typescript
public readonly totalPerHourBySubscription: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostCompute;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostCompute">DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostCompute</a>

---


### DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList <a name="DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.Initializer"></a>

```typescript
import { dataOciCloudMigrationsMigrationPlan } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.get"></a>

```typescript
public get(index: number): DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList <a name="DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.Initializer"></a>

```typescript
import { dataOciCloudMigrationsMigrationPlan } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.get"></a>

```typescript
public get(index: number): DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference <a name="DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer"></a>

```typescript
import { dataOciCloudMigrationsMigrationPlan } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.totalPerHour">totalPerHour</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.totalPerHourBySubscription">totalPerHourBySubscription</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImage">DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `totalPerHour`<sup>Required</sup> <a name="totalPerHour" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.totalPerHour"></a>

```typescript
public readonly totalPerHour: number;
```

- *Type:* number

---

##### `totalPerHourBySubscription`<sup>Required</sup> <a name="totalPerHourBySubscription" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.totalPerHourBySubscription"></a>

```typescript
public readonly totalPerHourBySubscription: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImage;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImage">DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImage</a>

---


### DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference <a name="DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer"></a>

```typescript
import { dataOciCloudMigrationsMigrationPlan } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.compute">compute</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList">DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.currencyCode">currencyCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.osImage">osImage</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList">DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.storage">storage</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList">DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.totalEstimationPerMonth">totalEstimationPerMonth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.totalEstimationPerMonthBySubscription">totalEstimationPerMonthBySubscription</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCost">DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCost</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compute`<sup>Required</sup> <a name="compute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.compute"></a>

```typescript
public readonly compute: DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList">DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList</a>

---

##### `currencyCode`<sup>Required</sup> <a name="currencyCode" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.currencyCode"></a>

```typescript
public readonly currencyCode: string;
```

- *Type:* string

---

##### `osImage`<sup>Required</sup> <a name="osImage" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.osImage"></a>

```typescript
public readonly osImage: DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList">DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList</a>

---

##### `storage`<sup>Required</sup> <a name="storage" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.storage"></a>

```typescript
public readonly storage: DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList">DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList</a>

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

---

##### `totalEstimationPerMonth`<sup>Required</sup> <a name="totalEstimationPerMonth" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.totalEstimationPerMonth"></a>

```typescript
public readonly totalEstimationPerMonth: number;
```

- *Type:* number

---

##### `totalEstimationPerMonthBySubscription`<sup>Required</sup> <a name="totalEstimationPerMonthBySubscription" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.totalEstimationPerMonthBySubscription"></a>

```typescript
public readonly totalEstimationPerMonthBySubscription: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCost;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCost">DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCost</a>

---


### DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList <a name="DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.Initializer"></a>

```typescript
import { dataOciCloudMigrationsMigrationPlan } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.get"></a>

```typescript
public get(index: number): DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference <a name="DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer"></a>

```typescript
import { dataOciCloudMigrationsMigrationPlan } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.totalGbPerMonth">totalGbPerMonth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.totalGbPerMonthBySubscription">totalGbPerMonthBySubscription</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.volumes">volumes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList">DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorage">DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `totalGbPerMonth`<sup>Required</sup> <a name="totalGbPerMonth" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.totalGbPerMonth"></a>

```typescript
public readonly totalGbPerMonth: number;
```

- *Type:* number

---

##### `totalGbPerMonthBySubscription`<sup>Required</sup> <a name="totalGbPerMonthBySubscription" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.totalGbPerMonthBySubscription"></a>

```typescript
public readonly totalGbPerMonthBySubscription: number;
```

- *Type:* number

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.volumes"></a>

```typescript
public readonly volumes: DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList">DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorage;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorage">DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorage</a>

---


### DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList <a name="DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.Initializer"></a>

```typescript
import { dataOciCloudMigrationsMigrationPlan } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.get"></a>

```typescript
public get(index: number): DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference <a name="DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer"></a>

```typescript
import { dataOciCloudMigrationsMigrationPlan } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.capacityGb">capacityGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.totalGbPerMonth">totalGbPerMonth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.totalGbPerMonthBySubscription">totalGbPerMonthBySubscription</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumes">DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `capacityGb`<sup>Required</sup> <a name="capacityGb" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.capacityGb"></a>

```typescript
public readonly capacityGb: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `totalGbPerMonth`<sup>Required</sup> <a name="totalGbPerMonth" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.totalGbPerMonth"></a>

```typescript
public readonly totalGbPerMonth: number;
```

- *Type:* number

---

##### `totalGbPerMonthBySubscription`<sup>Required</sup> <a name="totalGbPerMonthBySubscription" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.totalGbPerMonthBySubscription"></a>

```typescript
public readonly totalGbPerMonthBySubscription: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumes;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumes">DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumes</a>

---


### DataOciCloudMigrationsMigrationPlanStrategiesList <a name="DataOciCloudMigrationsMigrationPlanStrategiesList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesList.Initializer"></a>

```typescript
import { dataOciCloudMigrationsMigrationPlan } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesList.get"></a>

```typescript
public get(index: number): DataOciCloudMigrationsMigrationPlanStrategiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudMigrationsMigrationPlanStrategiesOutputReference <a name="DataOciCloudMigrationsMigrationPlanStrategiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.Initializer"></a>

```typescript
import { dataOciCloudMigrationsMigrationPlan } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.property.adjustmentMultiplier">adjustmentMultiplier</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.property.metricTimeWindow">metricTimeWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.property.metricType">metricType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.property.percentile">percentile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.property.strategyType">strategyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategies">DataOciCloudMigrationsMigrationPlanStrategies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adjustmentMultiplier`<sup>Required</sup> <a name="adjustmentMultiplier" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.property.adjustmentMultiplier"></a>

```typescript
public readonly adjustmentMultiplier: number;
```

- *Type:* number

---

##### `metricTimeWindow`<sup>Required</sup> <a name="metricTimeWindow" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.property.metricTimeWindow"></a>

```typescript
public readonly metricTimeWindow: string;
```

- *Type:* string

---

##### `metricType`<sup>Required</sup> <a name="metricType" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.property.metricType"></a>

```typescript
public readonly metricType: string;
```

- *Type:* string

---

##### `percentile`<sup>Required</sup> <a name="percentile" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.property.percentile"></a>

```typescript
public readonly percentile: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `strategyType`<sup>Required</sup> <a name="strategyType" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.property.strategyType"></a>

```typescript
public readonly strategyType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudMigrationsMigrationPlanStrategies;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanStrategies">DataOciCloudMigrationsMigrationPlanStrategies</a>

---


### DataOciCloudMigrationsMigrationPlanTargetEnvironmentsList <a name="DataOciCloudMigrationsMigrationPlanTargetEnvironmentsList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsList.Initializer"></a>

```typescript
import { dataOciCloudMigrationsMigrationPlan } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsList.get"></a>

```typescript
public get(index: number): DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference <a name="DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.Initializer"></a>

```typescript
import { dataOciCloudMigrationsMigrationPlan } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.dedicatedVmHost">dedicatedVmHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.faultDomain">faultDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.msLicense">msLicense</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.preferredShapeType">preferredShapeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.subnet">subnet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.targetCompartmentId">targetCompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.targetEnvironmentType">targetEnvironmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.vcn">vcn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironments">DataOciCloudMigrationsMigrationPlanTargetEnvironments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `dedicatedVmHost`<sup>Required</sup> <a name="dedicatedVmHost" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.dedicatedVmHost"></a>

```typescript
public readonly dedicatedVmHost: string;
```

- *Type:* string

---

##### `faultDomain`<sup>Required</sup> <a name="faultDomain" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.faultDomain"></a>

```typescript
public readonly faultDomain: string;
```

- *Type:* string

---

##### `msLicense`<sup>Required</sup> <a name="msLicense" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.msLicense"></a>

```typescript
public readonly msLicense: string;
```

- *Type:* string

---

##### `preferredShapeType`<sup>Required</sup> <a name="preferredShapeType" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.preferredShapeType"></a>

```typescript
public readonly preferredShapeType: string;
```

- *Type:* string

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.subnet"></a>

```typescript
public readonly subnet: string;
```

- *Type:* string

---

##### `targetCompartmentId`<sup>Required</sup> <a name="targetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.targetCompartmentId"></a>

```typescript
public readonly targetCompartmentId: string;
```

- *Type:* string

---

##### `targetEnvironmentType`<sup>Required</sup> <a name="targetEnvironmentType" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.targetEnvironmentType"></a>

```typescript
public readonly targetEnvironmentType: string;
```

- *Type:* string

---

##### `vcn`<sup>Required</sup> <a name="vcn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.vcn"></a>

```typescript
public readonly vcn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudMigrationsMigrationPlanTargetEnvironments;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlan.DataOciCloudMigrationsMigrationPlanTargetEnvironments">DataOciCloudMigrationsMigrationPlanTargetEnvironments</a>

---



