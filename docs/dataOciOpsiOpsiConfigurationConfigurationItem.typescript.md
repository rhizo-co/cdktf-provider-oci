# `dataOciOpsiOpsiConfigurationConfigurationItem` Submodule <a name="`dataOciOpsiOpsiConfigurationConfigurationItem` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOpsiOpsiConfigurationConfigurationItem <a name="DataOciOpsiOpsiConfigurationConfigurationItem" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item oci_opsi_opsi_configuration_configuration_item}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer"></a>

```typescript
import { dataOciOpsiOpsiConfigurationConfigurationItem } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem(scope: Construct, id: string, config: DataOciOpsiOpsiConfigurationConfigurationItemConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig">DataOciOpsiOpsiConfigurationConfigurationItemConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig">DataOciOpsiOpsiConfigurationConfigurationItemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.resetConfigItemField">resetConfigItemField</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.resetConfigItemsApplicableContext">resetConfigItemsApplicableContext</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.resetName">resetName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetConfigItemField` <a name="resetConfigItemField" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.resetConfigItemField"></a>

```typescript
public resetConfigItemField(): void
```

##### `resetConfigItemsApplicableContext` <a name="resetConfigItemsApplicableContext" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.resetConfigItemsApplicableContext"></a>

```typescript
public resetConfigItemsApplicableContext(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.resetName"></a>

```typescript
public resetName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOpsiOpsiConfigurationConfigurationItem resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.isConstruct"></a>

```typescript
import { dataOciOpsiOpsiConfigurationConfigurationItem } from 'rhizo-co-terraform-provider-oci'

dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.isTerraformElement"></a>

```typescript
import { dataOciOpsiOpsiConfigurationConfigurationItem } from 'rhizo-co-terraform-provider-oci'

dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.isTerraformDataSource"></a>

```typescript
import { dataOciOpsiOpsiConfigurationConfigurationItem } from 'rhizo-co-terraform-provider-oci'

dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.generateConfigForImport"></a>

```typescript
import { dataOciOpsiOpsiConfigurationConfigurationItem } from 'rhizo-co-terraform-provider-oci'

dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOpsiOpsiConfigurationConfigurationItem resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOpsiOpsiConfigurationConfigurationItem to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOpsiOpsiConfigurationConfigurationItem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOpsiOpsiConfigurationConfigurationItem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.configItems">configItems</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList">DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.configItemFieldInput">configItemFieldInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.configItemsApplicableContextInput">configItemsApplicableContextInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.opsiConfigTypeInput">opsiConfigTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.configItemField">configItemField</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.configItemsApplicableContext">configItemsApplicableContext</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.opsiConfigType">opsiConfigType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `configItems`<sup>Required</sup> <a name="configItems" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.configItems"></a>

```typescript
public readonly configItems: DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList">DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `configItemFieldInput`<sup>Optional</sup> <a name="configItemFieldInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.configItemFieldInput"></a>

```typescript
public readonly configItemFieldInput: string[];
```

- *Type:* string[]

---

##### `configItemsApplicableContextInput`<sup>Optional</sup> <a name="configItemsApplicableContextInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.configItemsApplicableContextInput"></a>

```typescript
public readonly configItemsApplicableContextInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `opsiConfigTypeInput`<sup>Optional</sup> <a name="opsiConfigTypeInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.opsiConfigTypeInput"></a>

```typescript
public readonly opsiConfigTypeInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `configItemField`<sup>Required</sup> <a name="configItemField" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.configItemField"></a>

```typescript
public readonly configItemField: string[];
```

- *Type:* string[]

---

##### `configItemsApplicableContext`<sup>Required</sup> <a name="configItemsApplicableContext" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.configItemsApplicableContext"></a>

```typescript
public readonly configItemsApplicableContext: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `opsiConfigType`<sup>Required</sup> <a name="opsiConfigType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.opsiConfigType"></a>

```typescript
public readonly opsiConfigType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOpsiOpsiConfigurationConfigurationItemConfig <a name="DataOciOpsiOpsiConfigurationConfigurationItemConfig" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.Initializer"></a>

```typescript
import { dataOciOpsiOpsiConfigurationConfigurationItem } from 'rhizo-co-terraform-provider-oci'

const dataOciOpsiOpsiConfigurationConfigurationItemConfig: dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.opsiConfigType">opsiConfigType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#opsi_config_type DataOciOpsiOpsiConfigurationConfigurationItem#opsi_config_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#compartment_id DataOciOpsiOpsiConfigurationConfigurationItem#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.configItemField">configItemField</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#config_item_field DataOciOpsiOpsiConfigurationConfigurationItem#config_item_field}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.configItemsApplicableContext">configItemsApplicableContext</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#config_items_applicable_context DataOciOpsiOpsiConfigurationConfigurationItem#config_items_applicable_context}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#id DataOciOpsiOpsiConfigurationConfigurationItem#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#name DataOciOpsiOpsiConfigurationConfigurationItem#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `opsiConfigType`<sup>Required</sup> <a name="opsiConfigType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.opsiConfigType"></a>

```typescript
public readonly opsiConfigType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#opsi_config_type DataOciOpsiOpsiConfigurationConfigurationItem#opsi_config_type}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#compartment_id DataOciOpsiOpsiConfigurationConfigurationItem#compartment_id}.

---

##### `configItemField`<sup>Optional</sup> <a name="configItemField" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.configItemField"></a>

```typescript
public readonly configItemField: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#config_item_field DataOciOpsiOpsiConfigurationConfigurationItem#config_item_field}.

---

##### `configItemsApplicableContext`<sup>Optional</sup> <a name="configItemsApplicableContext" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.configItemsApplicableContext"></a>

```typescript
public readonly configItemsApplicableContext: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#config_items_applicable_context DataOciOpsiOpsiConfigurationConfigurationItem#config_items_applicable_context}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#id DataOciOpsiOpsiConfigurationConfigurationItem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#name DataOciOpsiOpsiConfigurationConfigurationItem#name}.

---

### DataOciOpsiOpsiConfigurationConfigurationItemConfigItems <a name="DataOciOpsiOpsiConfigurationConfigurationItemConfigItems" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItems.Initializer"></a>

```typescript
import { dataOciOpsiOpsiConfigurationConfigurationItem } from 'rhizo-co-terraform-provider-oci'

const dataOciOpsiOpsiConfigurationConfigurationItemConfigItems: dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItems = { ... }
```


### DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadata <a name="DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadata.Initializer"></a>

```typescript
import { dataOciOpsiOpsiConfigurationConfigurationItem } from 'rhizo-co-terraform-provider-oci'

const dataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadata: dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadata = { ... }
```


### DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetails <a name="DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetails.Initializer"></a>

```typescript
import { dataOciOpsiOpsiConfigurationConfigurationItem } from 'rhizo-co-terraform-provider-oci'

const dataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetails: dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetails = { ... }
```


### DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetails <a name="DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetails.Initializer"></a>

```typescript
import { dataOciOpsiOpsiConfigurationConfigurationItem } from 'rhizo-co-terraform-provider-oci'

const dataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetails: dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetails = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList <a name="DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.Initializer"></a>

```typescript
import { dataOciOpsiOpsiConfigurationConfigurationItem } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.get"></a>

```typescript
public get(index: number): DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList <a name="DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.Initializer"></a>

```typescript
import { dataOciOpsiOpsiConfigurationConfigurationItem } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.get"></a>

```typescript
public get(index: number): DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference <a name="DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.Initializer"></a>

```typescript
import { dataOciOpsiOpsiConfigurationConfigurationItem } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.property.configItemType">configItemType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.property.dataType">dataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.property.unitDetails">unitDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList">DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.property.valueInputDetails">valueInputDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList">DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadata">DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `configItemType`<sup>Required</sup> <a name="configItemType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.property.configItemType"></a>

```typescript
public readonly configItemType: string;
```

- *Type:* string

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.property.dataType"></a>

```typescript
public readonly dataType: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `unitDetails`<sup>Required</sup> <a name="unitDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.property.unitDetails"></a>

```typescript
public readonly unitDetails: DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList">DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList</a>

---

##### `valueInputDetails`<sup>Required</sup> <a name="valueInputDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.property.valueInputDetails"></a>

```typescript
public readonly valueInputDetails: DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList">DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadata;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadata">DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadata</a>

---


### DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList <a name="DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.Initializer"></a>

```typescript
import { dataOciOpsiOpsiConfigurationConfigurationItem } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.get"></a>

```typescript
public get(index: number): DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference <a name="DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciOpsiOpsiConfigurationConfigurationItem } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetails">DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `unit`<sup>Required</sup> <a name="unit" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetails">DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetails</a>

---


### DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList <a name="DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.Initializer"></a>

```typescript
import { dataOciOpsiOpsiConfigurationConfigurationItem } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.get"></a>

```typescript
public get(index: number): DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference <a name="DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciOpsiOpsiConfigurationConfigurationItem } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.property.allowedValueType">allowedValueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.property.maxValue">maxValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.property.minValue">minValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.property.possibleValues">possibleValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetails">DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedValueType`<sup>Required</sup> <a name="allowedValueType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.property.allowedValueType"></a>

```typescript
public readonly allowedValueType: string;
```

- *Type:* string

---

##### `maxValue`<sup>Required</sup> <a name="maxValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.property.maxValue"></a>

```typescript
public readonly maxValue: string;
```

- *Type:* string

---

##### `minValue`<sup>Required</sup> <a name="minValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.property.minValue"></a>

```typescript
public readonly minValue: string;
```

- *Type:* string

---

##### `possibleValues`<sup>Required</sup> <a name="possibleValues" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.property.possibleValues"></a>

```typescript
public readonly possibleValues: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetails">DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetails</a>

---


### DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference <a name="DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.Initializer"></a>

```typescript
import { dataOciOpsiOpsiConfigurationConfigurationItem } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.applicableContexts">applicableContexts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.configItemType">configItemType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.defaultValue">defaultValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.metadata">metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList">DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.valueSourceConfig">valueSourceConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItems">DataOciOpsiOpsiConfigurationConfigurationItemConfigItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applicableContexts`<sup>Required</sup> <a name="applicableContexts" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.applicableContexts"></a>

```typescript
public readonly applicableContexts: string[];
```

- *Type:* string[]

---

##### `configItemType`<sup>Required</sup> <a name="configItemType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.configItemType"></a>

```typescript
public readonly configItemType: string;
```

- *Type:* string

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.defaultValue"></a>

```typescript
public readonly defaultValue: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.metadata"></a>

```typescript
public readonly metadata: DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList">DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `valueSourceConfig`<sup>Required</sup> <a name="valueSourceConfig" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.valueSourceConfig"></a>

```typescript
public readonly valueSourceConfig: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOpsiOpsiConfigurationConfigurationItemConfigItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItems">DataOciOpsiOpsiConfigurationConfigurationItemConfigItems</a>

---



