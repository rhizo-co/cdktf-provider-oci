# `dataOciLogAnalyticsLogAnalyticsEntityTopology` Submodule <a name="`dataOciLogAnalyticsLogAnalyticsEntityTopology` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLogAnalyticsLogAnalyticsEntityTopology <a name="DataOciLogAnalyticsLogAnalyticsEntityTopology" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entity_topology oci_log_analytics_log_analytics_entity_topology}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsEntityTopology } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology(scope: Construct, id: string, config: DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig">DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig">DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.resetMetadataEquals">resetMetadataEquals</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMetadataEquals` <a name="resetMetadataEquals" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.resetMetadataEquals"></a>

```typescript
public resetMetadataEquals(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciLogAnalyticsLogAnalyticsEntityTopology resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.isConstruct"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsEntityTopology } from 'rhizo-co-terraform-provider-oci'

dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.isTerraformElement"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsEntityTopology } from 'rhizo-co-terraform-provider-oci'

dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.isTerraformDataSource"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsEntityTopology } from 'rhizo-co-terraform-provider-oci'

dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.generateConfigForImport"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsEntityTopology } from 'rhizo-co-terraform-provider-oci'

dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciLogAnalyticsLogAnalyticsEntityTopology resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciLogAnalyticsLogAnalyticsEntityTopology to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciLogAnalyticsLogAnalyticsEntityTopology that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entity_topology#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLogAnalyticsLogAnalyticsEntityTopology to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList">DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.logAnalyticsEntityIdInput">logAnalyticsEntityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.metadataEqualsInput">metadataEqualsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.logAnalyticsEntityId">logAnalyticsEntityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.metadataEquals">metadataEquals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.items"></a>

```typescript
public readonly items: DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList">DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `logAnalyticsEntityIdInput`<sup>Optional</sup> <a name="logAnalyticsEntityIdInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.logAnalyticsEntityIdInput"></a>

```typescript
public readonly logAnalyticsEntityIdInput: string;
```

- *Type:* string

---

##### `metadataEqualsInput`<sup>Optional</sup> <a name="metadataEqualsInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.metadataEqualsInput"></a>

```typescript
public readonly metadataEqualsInput: string[];
```

- *Type:* string[]

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `logAnalyticsEntityId`<sup>Required</sup> <a name="logAnalyticsEntityId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.logAnalyticsEntityId"></a>

```typescript
public readonly logAnalyticsEntityId: string;
```

- *Type:* string

---

##### `metadataEquals`<sup>Required</sup> <a name="metadataEquals" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.metadataEquals"></a>

```typescript
public readonly metadataEquals: string[];
```

- *Type:* string[]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig <a name="DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsEntityTopology } from 'rhizo-co-terraform-provider-oci'

const dataOciLogAnalyticsLogAnalyticsEntityTopologyConfig: dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.property.logAnalyticsEntityId">logAnalyticsEntityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entity_topology#log_analytics_entity_id DataOciLogAnalyticsLogAnalyticsEntityTopology#log_analytics_entity_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entity_topology#namespace DataOciLogAnalyticsLogAnalyticsEntityTopology#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entity_topology#id DataOciLogAnalyticsLogAnalyticsEntityTopology#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.property.metadataEquals">metadataEquals</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entity_topology#metadata_equals DataOciLogAnalyticsLogAnalyticsEntityTopology#metadata_equals}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entity_topology#state DataOciLogAnalyticsLogAnalyticsEntityTopology#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `logAnalyticsEntityId`<sup>Required</sup> <a name="logAnalyticsEntityId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.property.logAnalyticsEntityId"></a>

```typescript
public readonly logAnalyticsEntityId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entity_topology#log_analytics_entity_id DataOciLogAnalyticsLogAnalyticsEntityTopology#log_analytics_entity_id}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entity_topology#namespace DataOciLogAnalyticsLogAnalyticsEntityTopology#namespace}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entity_topology#id DataOciLogAnalyticsLogAnalyticsEntityTopology#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadataEquals`<sup>Optional</sup> <a name="metadataEquals" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.property.metadataEquals"></a>

```typescript
public readonly metadataEquals: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entity_topology#metadata_equals DataOciLogAnalyticsLogAnalyticsEntityTopology#metadata_equals}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entity_topology#state DataOciLogAnalyticsLogAnalyticsEntityTopology#state}.

---

### DataOciLogAnalyticsLogAnalyticsEntityTopologyItems <a name="DataOciLogAnalyticsLogAnalyticsEntityTopologyItems" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItems.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsEntityTopology } from 'rhizo-co-terraform-provider-oci'

const dataOciLogAnalyticsLogAnalyticsEntityTopologyItems: dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItems = { ... }
```


### DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinks <a name="DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinks" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinks.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsEntityTopology } from 'rhizo-co-terraform-provider-oci'

const dataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinks: dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinks = { ... }
```


### DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItems <a name="DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItems" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItems.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsEntityTopology } from 'rhizo-co-terraform-provider-oci'

const dataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItems: dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItems = { ... }
```


### DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodes <a name="DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodes" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodes.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsEntityTopology } from 'rhizo-co-terraform-provider-oci'

const dataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodes: dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodes = { ... }
```


### DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItems <a name="DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItems" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItems.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsEntityTopology } from 'rhizo-co-terraform-provider-oci'

const dataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItems: dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList <a name="DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsEntityTopology } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList.get"></a>

```typescript
public get(index: number): DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference <a name="DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsEntityTopology } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.property.destinationEntityId">destinationEntityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.property.sourceEntityId">sourceEntityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItems">DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationEntityId`<sup>Required</sup> <a name="destinationEntityId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.property.destinationEntityId"></a>

```typescript
public readonly destinationEntityId: string;
```

- *Type:* string

---

##### `sourceEntityId`<sup>Required</sup> <a name="sourceEntityId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.property.sourceEntityId"></a>

```typescript
public readonly sourceEntityId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItems">DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItems</a>

---


### DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList <a name="DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsEntityTopology } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList.get"></a>

```typescript
public get(index: number): DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference <a name="DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsEntityTopology } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList">DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinks">DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.property.items"></a>

```typescript
public readonly items: DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList">DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinks;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinks">DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinks</a>

---


### DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList <a name="DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsEntityTopology } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList.get"></a>

```typescript
public get(index: number): DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList <a name="DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsEntityTopology } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList.get"></a>

```typescript
public get(index: number): DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference <a name="DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsEntityTopology } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.areLogsCollected">areLogsCollected</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.cloudResourceId">cloudResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.entityTypeInternalName">entityTypeInternalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.entityTypeName">entityTypeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.managementAgentId">managementAgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.sourceId">sourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.timezoneRegion">timezoneRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItems">DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `areLogsCollected`<sup>Required</sup> <a name="areLogsCollected" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.areLogsCollected"></a>

```typescript
public readonly areLogsCollected: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `cloudResourceId`<sup>Required</sup> <a name="cloudResourceId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.cloudResourceId"></a>

```typescript
public readonly cloudResourceId: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `entityTypeInternalName`<sup>Required</sup> <a name="entityTypeInternalName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.entityTypeInternalName"></a>

```typescript
public readonly entityTypeInternalName: string;
```

- *Type:* string

---

##### `entityTypeName`<sup>Required</sup> <a name="entityTypeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.entityTypeName"></a>

```typescript
public readonly entityTypeName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `managementAgentId`<sup>Required</sup> <a name="managementAgentId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.managementAgentId"></a>

```typescript
public readonly managementAgentId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sourceId`<sup>Required</sup> <a name="sourceId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.sourceId"></a>

```typescript
public readonly sourceId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `timezoneRegion`<sup>Required</sup> <a name="timezoneRegion" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.timezoneRegion"></a>

```typescript
public readonly timezoneRegion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItems">DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItems</a>

---


### DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList <a name="DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsEntityTopology } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList.get"></a>

```typescript
public get(index: number): DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference <a name="DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsEntityTopology } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList">DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodes">DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.property.items"></a>

```typescript
public readonly items: DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList">DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodes;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodes">DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodes</a>

---


### DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference <a name="DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsEntityTopology } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.property.links">links</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList">DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.property.nodes">nodes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList">DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItems">DataOciLogAnalyticsLogAnalyticsEntityTopologyItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `links`<sup>Required</sup> <a name="links" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.property.links"></a>

```typescript
public readonly links: DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList">DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList</a>

---

##### `nodes`<sup>Required</sup> <a name="nodes" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.property.nodes"></a>

```typescript
public readonly nodes: DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList">DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciLogAnalyticsLogAnalyticsEntityTopologyItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItems">DataOciLogAnalyticsLogAnalyticsEntityTopologyItems</a>

---



