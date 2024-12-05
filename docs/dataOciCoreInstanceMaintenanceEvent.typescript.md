# `dataOciCoreInstanceMaintenanceEvent` Submodule <a name="`dataOciCoreInstanceMaintenanceEvent` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreInstanceMaintenanceEvent <a name="DataOciCoreInstanceMaintenanceEvent" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_event oci_core_instance_maintenance_event}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.Initializer"></a>

```typescript
import { dataOciCoreInstanceMaintenanceEvent } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent(scope: Construct, id: string, config: DataOciCoreInstanceMaintenanceEventConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEventConfig">DataOciCoreInstanceMaintenanceEventConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEventConfig">DataOciCoreInstanceMaintenanceEventConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreInstanceMaintenanceEvent resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.isConstruct"></a>

```typescript
import { dataOciCoreInstanceMaintenanceEvent } from 'rhizo-co-terraform-provider-oci'

dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.isTerraformElement"></a>

```typescript
import { dataOciCoreInstanceMaintenanceEvent } from 'rhizo-co-terraform-provider-oci'

dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.isTerraformDataSource"></a>

```typescript
import { dataOciCoreInstanceMaintenanceEvent } from 'rhizo-co-terraform-provider-oci'

dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.generateConfigForImport"></a>

```typescript
import { dataOciCoreInstanceMaintenanceEvent } from 'rhizo-co-terraform-provider-oci'

dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCoreInstanceMaintenanceEvent resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCoreInstanceMaintenanceEvent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCoreInstanceMaintenanceEvent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_event#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreInstanceMaintenanceEvent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.additionalDetails">additionalDetails</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.alternativeResolutionAction">alternativeResolutionAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.alternativeResolutionActions">alternativeResolutionActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.canDeleteLocalStorage">canDeleteLocalStorage</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.canReschedule">canReschedule</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.correlationToken">correlationToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.estimatedDuration">estimatedDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.instanceAction">instanceAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.maintenanceCategory">maintenanceCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.maintenanceReason">maintenanceReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.startWindowDuration">startWindowDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.timeFinished">timeFinished</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.timeHardDueDate">timeHardDueDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.timeStarted">timeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.timeWindowStart">timeWindowStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.instanceMaintenanceEventIdInput">instanceMaintenanceEventIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.instanceMaintenanceEventId">instanceMaintenanceEventId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `additionalDetails`<sup>Required</sup> <a name="additionalDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.additionalDetails"></a>

```typescript
public readonly additionalDetails: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `alternativeResolutionAction`<sup>Required</sup> <a name="alternativeResolutionAction" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.alternativeResolutionAction"></a>

```typescript
public readonly alternativeResolutionAction: string;
```

- *Type:* string

---

##### `alternativeResolutionActions`<sup>Required</sup> <a name="alternativeResolutionActions" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.alternativeResolutionActions"></a>

```typescript
public readonly alternativeResolutionActions: string[];
```

- *Type:* string[]

---

##### `canDeleteLocalStorage`<sup>Required</sup> <a name="canDeleteLocalStorage" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.canDeleteLocalStorage"></a>

```typescript
public readonly canDeleteLocalStorage: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `canReschedule`<sup>Required</sup> <a name="canReschedule" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.canReschedule"></a>

```typescript
public readonly canReschedule: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `correlationToken`<sup>Required</sup> <a name="correlationToken" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.correlationToken"></a>

```typescript
public readonly correlationToken: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `estimatedDuration`<sup>Required</sup> <a name="estimatedDuration" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.estimatedDuration"></a>

```typescript
public readonly estimatedDuration: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceAction`<sup>Required</sup> <a name="instanceAction" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.instanceAction"></a>

```typescript
public readonly instanceAction: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `maintenanceCategory`<sup>Required</sup> <a name="maintenanceCategory" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.maintenanceCategory"></a>

```typescript
public readonly maintenanceCategory: string;
```

- *Type:* string

---

##### `maintenanceReason`<sup>Required</sup> <a name="maintenanceReason" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.maintenanceReason"></a>

```typescript
public readonly maintenanceReason: string;
```

- *Type:* string

---

##### `startWindowDuration`<sup>Required</sup> <a name="startWindowDuration" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.startWindowDuration"></a>

```typescript
public readonly startWindowDuration: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeFinished`<sup>Required</sup> <a name="timeFinished" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.timeFinished"></a>

```typescript
public readonly timeFinished: string;
```

- *Type:* string

---

##### `timeHardDueDate`<sup>Required</sup> <a name="timeHardDueDate" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.timeHardDueDate"></a>

```typescript
public readonly timeHardDueDate: string;
```

- *Type:* string

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.timeStarted"></a>

```typescript
public readonly timeStarted: string;
```

- *Type:* string

---

##### `timeWindowStart`<sup>Required</sup> <a name="timeWindowStart" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.timeWindowStart"></a>

```typescript
public readonly timeWindowStart: string;
```

- *Type:* string

---

##### `instanceMaintenanceEventIdInput`<sup>Optional</sup> <a name="instanceMaintenanceEventIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.instanceMaintenanceEventIdInput"></a>

```typescript
public readonly instanceMaintenanceEventIdInput: string;
```

- *Type:* string

---

##### `instanceMaintenanceEventId`<sup>Required</sup> <a name="instanceMaintenanceEventId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.instanceMaintenanceEventId"></a>

```typescript
public readonly instanceMaintenanceEventId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreInstanceMaintenanceEventConfig <a name="DataOciCoreInstanceMaintenanceEventConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEventConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEventConfig.Initializer"></a>

```typescript
import { dataOciCoreInstanceMaintenanceEvent } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreInstanceMaintenanceEventConfig: dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEventConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEventConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEventConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEventConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEventConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEventConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEventConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEventConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEventConfig.property.instanceMaintenanceEventId">instanceMaintenanceEventId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_event#instance_maintenance_event_id DataOciCoreInstanceMaintenanceEvent#instance_maintenance_event_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEventConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEventConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEventConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEventConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEventConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEventConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEventConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `instanceMaintenanceEventId`<sup>Required</sup> <a name="instanceMaintenanceEventId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEventConfig.property.instanceMaintenanceEventId"></a>

```typescript
public readonly instanceMaintenanceEventId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_event#instance_maintenance_event_id DataOciCoreInstanceMaintenanceEvent#instance_maintenance_event_id}.

---



