# `dataOciOpsiOpsiConfigurations` Submodule <a name="`dataOciOpsiOpsiConfigurations` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOpsiOpsiConfigurations <a name="DataOciOpsiOpsiConfigurations" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations oci_opsi_opsi_configurations}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.Initializer"></a>

```typescript
import { dataOciOpsiOpsiConfigurations } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations(scope: Construct, id: string, config: DataOciOpsiOpsiConfigurationsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig">DataOciOpsiOpsiConfigurationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig">DataOciOpsiOpsiConfigurationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.resetOpsiConfigType">resetOpsiConfigType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciOpsiOpsiConfigurationsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilter">DataOciOpsiOpsiConfigurationsFilter</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOpsiConfigType` <a name="resetOpsiConfigType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.resetOpsiConfigType"></a>

```typescript
public resetOpsiConfigType(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOpsiOpsiConfigurations resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.isConstruct"></a>

```typescript
import { dataOciOpsiOpsiConfigurations } from 'rhizo-co-terraform-provider-oci'

dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.isTerraformElement"></a>

```typescript
import { dataOciOpsiOpsiConfigurations } from 'rhizo-co-terraform-provider-oci'

dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.isTerraformDataSource"></a>

```typescript
import { dataOciOpsiOpsiConfigurations } from 'rhizo-co-terraform-provider-oci'

dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.generateConfigForImport"></a>

```typescript
import { dataOciOpsiOpsiConfigurations } from 'rhizo-co-terraform-provider-oci'

dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOpsiOpsiConfigurations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOpsiOpsiConfigurations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOpsiOpsiConfigurations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOpsiOpsiConfigurations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList">DataOciOpsiOpsiConfigurationsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.opsiConfigurationsCollection">opsiConfigurationsCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilter">DataOciOpsiOpsiConfigurationsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.opsiConfigTypeInput">opsiConfigTypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.stateInput">stateInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.opsiConfigType">opsiConfigType</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.state">state</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.filter"></a>

```typescript
public readonly filter: DataOciOpsiOpsiConfigurationsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList">DataOciOpsiOpsiConfigurationsFilterList</a>

---

##### `opsiConfigurationsCollection`<sup>Required</sup> <a name="opsiConfigurationsCollection" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.opsiConfigurationsCollection"></a>

```typescript
public readonly opsiConfigurationsCollection: DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciOpsiOpsiConfigurationsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilter">DataOciOpsiOpsiConfigurationsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `opsiConfigTypeInput`<sup>Optional</sup> <a name="opsiConfigTypeInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.opsiConfigTypeInput"></a>

```typescript
public readonly opsiConfigTypeInput: string[];
```

- *Type:* string[]

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.stateInput"></a>

```typescript
public readonly stateInput: string[];
```

- *Type:* string[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `opsiConfigType`<sup>Required</sup> <a name="opsiConfigType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.opsiConfigType"></a>

```typescript
public readonly opsiConfigType: string[];
```

- *Type:* string[]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.state"></a>

```typescript
public readonly state: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOpsiOpsiConfigurationsConfig <a name="DataOciOpsiOpsiConfigurationsConfig" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.Initializer"></a>

```typescript
import { dataOciOpsiOpsiConfigurations } from 'rhizo-co-terraform-provider-oci'

const dataOciOpsiOpsiConfigurationsConfig: dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#compartment_id DataOciOpsiOpsiConfigurations#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#display_name DataOciOpsiOpsiConfigurations#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilter">DataOciOpsiOpsiConfigurationsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#id DataOciOpsiOpsiConfigurations#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.opsiConfigType">opsiConfigType</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#opsi_config_type DataOciOpsiOpsiConfigurations#opsi_config_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.state">state</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#state DataOciOpsiOpsiConfigurations#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#compartment_id DataOciOpsiOpsiConfigurations#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#display_name DataOciOpsiOpsiConfigurations#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciOpsiOpsiConfigurationsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilter">DataOciOpsiOpsiConfigurationsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#filter DataOciOpsiOpsiConfigurations#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#id DataOciOpsiOpsiConfigurations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `opsiConfigType`<sup>Optional</sup> <a name="opsiConfigType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.opsiConfigType"></a>

```typescript
public readonly opsiConfigType: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#opsi_config_type DataOciOpsiOpsiConfigurations#opsi_config_type}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.state"></a>

```typescript
public readonly state: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#state DataOciOpsiOpsiConfigurations#state}.

---

### DataOciOpsiOpsiConfigurationsFilter <a name="DataOciOpsiOpsiConfigurationsFilter" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilter.Initializer"></a>

```typescript
import { dataOciOpsiOpsiConfigurations } from 'rhizo-co-terraform-provider-oci'

const dataOciOpsiOpsiConfigurationsFilter: dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#name DataOciOpsiOpsiConfigurations#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#values DataOciOpsiOpsiConfigurations#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#regex DataOciOpsiOpsiConfigurations#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#name DataOciOpsiOpsiConfigurations#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#values DataOciOpsiOpsiConfigurations#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#regex DataOciOpsiOpsiConfigurations#regex}.

---

### DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollection <a name="DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollection" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollection.Initializer"></a>

```typescript
import { dataOciOpsiOpsiConfigurations } from 'rhizo-co-terraform-provider-oci'

const dataOciOpsiOpsiConfigurationsOpsiConfigurationsCollection: dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollection = { ... }
```


### DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItems <a name="DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItems.Initializer"></a>

```typescript
import { dataOciOpsiOpsiConfigurations } from 'rhizo-co-terraform-provider-oci'

const dataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItems: dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItems = { ... }
```


### DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItems <a name="DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItems" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItems.Initializer"></a>

```typescript
import { dataOciOpsiOpsiConfigurations } from 'rhizo-co-terraform-provider-oci'

const dataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItems: dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItems = { ... }
```


### DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadata <a name="DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadata.Initializer"></a>

```typescript
import { dataOciOpsiOpsiConfigurations } from 'rhizo-co-terraform-provider-oci'

const dataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadata: dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadata = { ... }
```


### DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetails <a name="DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetails.Initializer"></a>

```typescript
import { dataOciOpsiOpsiConfigurations } from 'rhizo-co-terraform-provider-oci'

const dataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetails: dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetails = { ... }
```


### DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetails <a name="DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetails.Initializer"></a>

```typescript
import { dataOciOpsiOpsiConfigurations } from 'rhizo-co-terraform-provider-oci'

const dataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetails: dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetails = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOpsiOpsiConfigurationsFilterList <a name="DataOciOpsiOpsiConfigurationsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.Initializer"></a>

```typescript
import { dataOciOpsiOpsiConfigurations } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.get"></a>

```typescript
public get(index: number): DataOciOpsiOpsiConfigurationsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilter">DataOciOpsiOpsiConfigurationsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOpsiOpsiConfigurationsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilter">DataOciOpsiOpsiConfigurationsFilter</a>[]

---


### DataOciOpsiOpsiConfigurationsFilterOutputReference <a name="DataOciOpsiOpsiConfigurationsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciOpsiOpsiConfigurations } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilter">DataOciOpsiOpsiConfigurationsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOpsiOpsiConfigurationsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilter">DataOciOpsiOpsiConfigurationsFilter</a>

---


### DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList <a name="DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.Initializer"></a>

```typescript
import { dataOciOpsiOpsiConfigurations } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.get"></a>

```typescript
public get(index: number): DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList <a name="DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.Initializer"></a>

```typescript
import { dataOciOpsiOpsiConfigurations } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.get"></a>

```typescript
public get(index: number): DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference <a name="DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.Initializer"></a>

```typescript
import { dataOciOpsiOpsiConfigurations } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.property.configItemType">configItemType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.property.dataType">dataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.property.unitDetails">unitDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.property.valueInputDetails">valueInputDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadata">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `configItemType`<sup>Required</sup> <a name="configItemType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.property.configItemType"></a>

```typescript
public readonly configItemType: string;
```

- *Type:* string

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.property.dataType"></a>

```typescript
public readonly dataType: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `unitDetails`<sup>Required</sup> <a name="unitDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.property.unitDetails"></a>

```typescript
public readonly unitDetails: DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList</a>

---

##### `valueInputDetails`<sup>Required</sup> <a name="valueInputDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.property.valueInputDetails"></a>

```typescript
public readonly valueInputDetails: DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadata;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadata">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadata</a>

---


### DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList <a name="DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.Initializer"></a>

```typescript
import { dataOciOpsiOpsiConfigurations } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.get"></a>

```typescript
public get(index: number): DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference <a name="DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciOpsiOpsiConfigurations } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetails">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `unit`<sup>Required</sup> <a name="unit" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetails">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetails</a>

---


### DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList <a name="DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.Initializer"></a>

```typescript
import { dataOciOpsiOpsiConfigurations } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.get"></a>

```typescript
public get(index: number): DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference <a name="DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciOpsiOpsiConfigurations } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.property.allowedValueType">allowedValueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.property.maxValue">maxValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.property.minValue">minValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.property.possibleValues">possibleValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetails">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedValueType`<sup>Required</sup> <a name="allowedValueType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.property.allowedValueType"></a>

```typescript
public readonly allowedValueType: string;
```

- *Type:* string

---

##### `maxValue`<sup>Required</sup> <a name="maxValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.property.maxValue"></a>

```typescript
public readonly maxValue: string;
```

- *Type:* string

---

##### `minValue`<sup>Required</sup> <a name="minValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.property.minValue"></a>

```typescript
public readonly minValue: string;
```

- *Type:* string

---

##### `possibleValues`<sup>Required</sup> <a name="possibleValues" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.property.possibleValues"></a>

```typescript
public readonly possibleValues: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetails">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetails</a>

---


### DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference <a name="DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.Initializer"></a>

```typescript
import { dataOciOpsiOpsiConfigurations } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.property.applicableContexts">applicableContexts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.property.configItemType">configItemType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.property.defaultValue">defaultValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.property.metadata">metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItems">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applicableContexts`<sup>Required</sup> <a name="applicableContexts" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.property.applicableContexts"></a>

```typescript
public readonly applicableContexts: string[];
```

- *Type:* string[]

---

##### `configItemType`<sup>Required</sup> <a name="configItemType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.property.configItemType"></a>

```typescript
public readonly configItemType: string;
```

- *Type:* string

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.property.defaultValue"></a>

```typescript
public readonly defaultValue: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.property.metadata"></a>

```typescript
public readonly metadata: DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItems">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItems</a>

---


### DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList <a name="DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.Initializer"></a>

```typescript
import { dataOciOpsiOpsiConfigurations } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference <a name="DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciOpsiOpsiConfigurations } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.configItemCustomStatus">configItemCustomStatus</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.configItemField">configItemField</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.configItems">configItems</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.configItemsApplicableContext">configItemsApplicableContext</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.opsiConfigField">opsiConfigField</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.opsiConfigType">opsiConfigType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItems">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `configItemCustomStatus`<sup>Required</sup> <a name="configItemCustomStatus" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.configItemCustomStatus"></a>

```typescript
public readonly configItemCustomStatus: string[];
```

- *Type:* string[]

---

##### `configItemField`<sup>Required</sup> <a name="configItemField" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.configItemField"></a>

```typescript
public readonly configItemField: string[];
```

- *Type:* string[]

---

##### `configItems`<sup>Required</sup> <a name="configItems" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.configItems"></a>

```typescript
public readonly configItems: DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList</a>

---

##### `configItemsApplicableContext`<sup>Required</sup> <a name="configItemsApplicableContext" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.configItemsApplicableContext"></a>

```typescript
public readonly configItemsApplicableContext: string[];
```

- *Type:* string[]

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `opsiConfigField`<sup>Required</sup> <a name="opsiConfigField" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.opsiConfigField"></a>

```typescript
public readonly opsiConfigField: string[];
```

- *Type:* string[]

---

##### `opsiConfigType`<sup>Required</sup> <a name="opsiConfigType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.opsiConfigType"></a>

```typescript
public readonly opsiConfigType: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItems">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItems</a>

---


### DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList <a name="DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.Initializer"></a>

```typescript
import { dataOciOpsiOpsiConfigurations } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.get"></a>

```typescript
public get(index: number): DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference <a name="DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciOpsiOpsiConfigurations } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollection">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollection">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollection</a>

---



